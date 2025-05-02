import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {

  beamGatewayForm!: FormGroup;

  constructor(private fb: FormBuilder, private httpClient:HttpClient) {
  }

  ngOnInit(): void {
    this.beamGatewayForm = this.fb.group({
      enableGateway: [false],        // default unchecked
      terminalKey: ['', Validators.required],
      deviceId: ['', Validators.required]
    });
  }

  onSaveChanges() {
    if (this.beamGatewayForm.valid) {
      console.log('Saving Changes:', this.beamGatewayForm.value);
      const requestData  = {terminalKey: this.beamGatewayForm.controls['terminalKey'].value, deviceId: this.beamGatewayForm.controls['deviceId'].value}
      this.httpClient.put(`https://api.dev.beamwallet.com/terminal-api/v4/public/terminals/${this.beamGatewayForm.controls['terminalKey'].value}/provision`, requestData).subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      });
    } else {
      console.log('Form is invalid.');
    }
  }

}
