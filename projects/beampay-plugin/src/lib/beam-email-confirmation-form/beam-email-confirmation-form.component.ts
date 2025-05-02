import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BeampayPluginService} from "../beampay-plugin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpResponse} from "@angular/common/http";
import {tokenReference} from "@angular/compiler";

@Component({
  selector: 'app-beam-email-confirmation-form',
  templateUrl: './beam-email-confirmation-form.component.html',
  styleUrls: ['./beam-email-confirmation-form.component.css']
})
export class BeamEmailConfirmationFormComponent implements OnInit {

  authForm: FormGroup;
  termsAccepted = false;
  showOtp: boolean;
  @Input() showGateway: boolean;
  @Input() amount: any;
  @Input() lineItems: any;
  @Input() terminalKey!: string;
  loading: boolean;
  fundingSourceUuid: any;

  constructor(private fb: FormBuilder, private router: Router, private beampayPluginService: BeampayPluginService, private matSnackBar:MatSnackBar) {
    this.authForm = new FormGroup({});
    this.showOtp = false;
    this.showGateway = false;
    this.loading = false;
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pinCode: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
    });
    // this.terminalKey = sessionStorage.getItem('terminalKey');
    console.log(this.terminalKey);
    console.log(this.amount);
    this.terminalKey = 'f4babaa48ce241da8df927ad3e74600e82da590e033a454c968caa80dabd2294'
    this.fundingSourceUuid = '';
  }

  requestOtp(uuid: string) {
    console.log('In req otp');
    const requestData = {
      'email': this.authForm.value.email,
      'pinCode': this.authForm.value.pinCode,
      'selectedEmailUuid': uuid
    };

    this.beampayPluginService.sendOtp(requestData).subscribe((response) => {
      console.log(response);
      this.matSnackBar.open('OTP sent successfully!', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
      this.loading = false;
      this.showOtp = true;
    }, error => {
      console.error('Error sending OTP:', error);
      this.matSnackBar.open('Error while sending the OTP', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
      this.loading = false;
    });
  }

  finalizeOrder() {
    const requestData = {
      'email': this.authForm.value.email,
      'pinCode': this.authForm.value.pinCode,
      'oneTimePassword': this.authForm.value.otp
    };
    console.log(requestData);
    this.beampayPluginService.finalizeOrder(requestData).subscribe((response) => {
      console.log(response.headers);
      console.log(response);
      const responseData: any = response.body;
      console.log(responseData);
      if (responseData.fundingSources.length === 0) {
        this.fundingSourceUuid = responseData.fundingSources[0].uuid;
      }
      console.log(this.fundingSourceUuid);
      sessionStorage.setItem('x-beamer-token', <string>response.headers.get('x-beamer-token'));
      this.joinConversation(responseData.fundingSources[0].uuid, <string>response.headers.get('x-beamer-token'));
    }, error => {
      console.error('Error finalizing order:', error);
      this.matSnackBar.open(error.error.errors[0].errorMessage? error.error.errors[0].errorMessage :'Error while finalizing order', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }

  getUuid() {
    console.log(this.authForm.get('email')?.value);
    this.loading = true;
    console.log(this.terminalKey);
    console.log(this.amount);
    this.beampayPluginService.loginWithOtp({email: this.authForm.get('email')?.value, pinCode:  this.authForm.get('pinCode')?.value}).subscribe((res:any) => {
      console.log(res);
      this.requestOtp(res['emails'][0].uuid);
    }, error => {
      console.log('Error getting UUID:', error);
      if (error.status === 412) {
        this.requestOtp(error.error['emails'][0].uuid);
      } else {
        this.matSnackBar.open('Unauthorized Access', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3000
        });
        this.loading = false;
      }
    });
  }

  joinConversation(fundingSourceUuid: any, authToken: string) {
    const request = {
      "type": "payment",
      "conversationReference": null,
      "amountToPay": this.amount,
      "pinCode": this.authForm.get('pinCode')?.value,
      "terminalKey": this.terminalKey,
      "fundingSourceUuid": fundingSourceUuid,
      "conversationReferenceToRefund": null,
      "flags": {
        "sanityCheckPosAmount": true,
        "waitForTip": false,
        "beamerConfirmAmount": false,
        "merchantOnlyRefund": false
      },
    }
    this.loading = true;
    this.beampayPluginService.joinConversation(request, this.terminalKey, authToken).subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      if(res.status === 'pending' || res.status === 'processing' || res.status==='ready') {
        this.getConversationStatus(res.uuid, authToken);
      }else {
        this.matSnackBar.open(res.message, 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/']);
      }

    }, error => {
      console.error('Error joining conversation:', error);
      this.matSnackBar.open('Error while sending the OTP', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 3000
      });
    });
  }

  getConversationStatus(referenceIdentifier: any, authToken: string) {
    this.loading = true;
    this.beampayPluginService.getConversationStatus(referenceIdentifier, this.terminalKey, authToken).subscribe((res: any) => {
      console.log(res);
      if (res.status === 'pending' || res.status === 'ready' || res.status === 'processing') {
        setTimeout(() => {
          this.getConversationStatus(referenceIdentifier, authToken);
        },3000);
      } else if(res.status === 'aborted' || res.status === 'successful') {
        this.matSnackBar.open(res.message, 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.loading = false;
        this.router.navigate(['/']);
      } else {
        this.matSnackBar.open('Error occurred!', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/']);
        this.loading = false;
      }
    }, error => {
      console.error('Error getting conversation status:', error);
      this.loading = false;
      // Handle error here
      this.matSnackBar.open('Error occurred!', 'Close', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }
}
