import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpResponse, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { tap, catchError, throwError } from 'rxjs';
import * as i1$1 from '@angular/forms';
import { Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i4$1 from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as i5$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i6$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4 from '@angular/material/form-field';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';

class BeampayPluginService {
    constructor(http) {
        this.http = http;
    }
    sendOtp(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/request-otp`, requestData, { responseType: 'text' });
    }
    loginWithOtp(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData).pipe(tap(event => {
            if (event instanceof HttpResponse && event.status === 412) {
                return event;
            }
            return event;
        }), catchError((error) => {
            if (error.status === 412) {
                // Handle 412 error, for example, by returning the error as is
                return throwError(() => error);
            }
            // Re-throw other errors
            return throwError(() => error);
        }));
    }
    getUuid(email) {
        return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/email/${email}`);
    }
    finalizeOrder(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData, { observe: 'response' });
    }
    joinConversation(request, terminalKey, authToken) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + authToken,
        });
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation`, request, { headers: headers });
    }
    getConversationStatus(referenceIdentifier, terminalKey, authToken) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + authToken,
        });
        return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation/${referenceIdentifier}`, { headers: headers });
    }
}
BeampayPluginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
BeampayPluginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class GatewayComponent {
    constructor(fb, httpClient) {
        this.fb = fb;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.beamGatewayForm = this.fb.group({
            enableGateway: [false],
            terminalKey: ['', Validators.required],
            deviceId: ['', Validators.required]
        });
    }
    onSaveChanges() {
        if (this.beamGatewayForm.valid) {
            console.log('Saving Changes:', this.beamGatewayForm.value);
            const requestData = { terminalKey: this.beamGatewayForm.controls['terminalKey'].value, deviceId: this.beamGatewayForm.controls['deviceId'].value };
            this.httpClient.put(`https://api.dev.beamwallet.com/terminal-api/v4/public/terminals/${this.beamGatewayForm.controls['terminalKey'].value}/provision`, requestData).subscribe(res => {
                console.log(res);
            }, error => {
                console.log(error);
            });
        }
        else {
            console.log('Form is invalid.');
        }
    }
}
GatewayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GatewayComponent, deps: [{ token: i1$1.FormBuilder }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
GatewayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: GatewayComponent, selector: "app-gateway", ngImport: i0, template: "  <h2>Beam Gateway</h2>\n  <p class=\"mat-caption\">\n    Beam Gateway allows you to purchase from online stores with WooCommerce using your Beam digital wallet and receive cashback just as you were in a physical store.\n    To get a \"Terminal Key\" and a \"Device ID\" you need to have a Beam account. Visit\n    <a href=\"https://register.beamwallet.com/\" target=\"_blank\">https://register.beamwallet.com/</a>.\n  </p>\n\n  <form [formGroup]=\"beamGatewayForm\" (ngSubmit)=\"onSaveChanges()\">\n\n    <mat-checkbox formControlName=\"enableGateway\">\n      Enable Beam Gateway\n    </mat-checkbox>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Terminal Key</mat-label>\n        <input matInput formControlName=\"terminalKey\">\n        <mat-error *ngIf=\"beamGatewayForm.get('terminalKey')?.hasError('required')\">\n          Terminal Key is required\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Device ID</mat-label>\n        <input matInput formControlName=\"deviceId\">\n        <mat-error *ngIf=\"beamGatewayForm.get('deviceId')?.hasError('required')\">\n          Device ID is required\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <button\n      mat-raised-button\n      class=\"bg-pink text-white\"\n      type=\"submit\"\n      [disabled]=\"beamGatewayForm.invalid\">\n      Save changes\n    </button>\n  </form>\n", styles: [".beam-gateway-container{max-width:600px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a}.beam-gateway-container h2{margin-bottom:10px}.beam-gateway-container p{font-size:14px;color:#555;margin-bottom:20px}.form-group{margin-bottom:20px}.full-width{width:100%}mat-checkbox{margin-bottom:20px;display:block}.bg-pink{background-color:#ff2069}.text-white{color:#fff}\n"], components: [{ type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.MatLabel, selector: "mat-label" }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.MatError, selector: "mat-error", inputs: ["id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GatewayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-gateway', template: "  <h2>Beam Gateway</h2>\n  <p class=\"mat-caption\">\n    Beam Gateway allows you to purchase from online stores with WooCommerce using your Beam digital wallet and receive cashback just as you were in a physical store.\n    To get a \"Terminal Key\" and a \"Device ID\" you need to have a Beam account. Visit\n    <a href=\"https://register.beamwallet.com/\" target=\"_blank\">https://register.beamwallet.com/</a>.\n  </p>\n\n  <form [formGroup]=\"beamGatewayForm\" (ngSubmit)=\"onSaveChanges()\">\n\n    <mat-checkbox formControlName=\"enableGateway\">\n      Enable Beam Gateway\n    </mat-checkbox>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Terminal Key</mat-label>\n        <input matInput formControlName=\"terminalKey\">\n        <mat-error *ngIf=\"beamGatewayForm.get('terminalKey')?.hasError('required')\">\n          Terminal Key is required\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form-group\">\n      <mat-form-field appearance=\"outline\" class=\"full-width\">\n        <mat-label>Device ID</mat-label>\n        <input matInput formControlName=\"deviceId\">\n        <mat-error *ngIf=\"beamGatewayForm.get('deviceId')?.hasError('required')\">\n          Device ID is required\n        </mat-error>\n      </mat-form-field>\n    </div>\n\n    <button\n      mat-raised-button\n      class=\"bg-pink text-white\"\n      type=\"submit\"\n      [disabled]=\"beamGatewayForm.invalid\">\n      Save changes\n    </button>\n  </form>\n", styles: [".beam-gateway-container{max-width:600px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 6px #0000001a}.beam-gateway-container h2{margin-bottom:10px}.beam-gateway-container p{font-size:14px;color:#555;margin-bottom:20px}.form-group{margin-bottom:20px}.full-width{width:100%}mat-checkbox{margin-bottom:20px;display:block}.bg-pink{background-color:#ff2069}.text-white{color:#fff}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i1.HttpClient }]; } });

class BeamEmailConfirmationFormComponent {
    constructor(fb, router, beampayPluginService, matSnackBar) {
        this.fb = fb;
        this.router = router;
        this.beampayPluginService = beampayPluginService;
        this.matSnackBar = matSnackBar;
        this.termsAccepted = false;
        this.authForm = new FormGroup({});
        this.showOtp = false;
        this.showGateway = false;
        this.loading = false;
    }
    ngOnInit() {
        this.authForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            pinCode: ['', [Validators.required]],
            acceptTerms: [false, Validators.requiredTrue],
            otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
        });
        // this.terminalKey = sessionStorage.getItem('terminalKey');
        console.log(this.terminalKey);
        console.log(this.amount);
        this.terminalKey = 'f4babaa48ce241da8df927ad3e74600e82da590e033a454c968caa80dabd2294';
        this.fundingSourceUuid = '';
    }
    requestOtp(uuid) {
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
            const responseData = response.body;
            console.log(responseData);
            if (responseData.fundingSources.length === 0) {
                this.fundingSourceUuid = responseData.fundingSources[0].uuid;
            }
            console.log(this.fundingSourceUuid);
            sessionStorage.setItem('x-beamer-token', response.headers.get('x-beamer-token'));
            this.joinConversation(responseData.fundingSources[0].uuid, response.headers.get('x-beamer-token'));
        }, error => {
            console.error('Error finalizing order:', error);
            this.matSnackBar.open(error.error.errors[0].errorMessage ? error.error.errors[0].errorMessage : 'Error while finalizing order', 'Close', {
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
        this.beampayPluginService.loginWithOtp({ email: this.authForm.get('email')?.value, pinCode: this.authForm.get('pinCode')?.value }).subscribe((res) => {
            console.log(res);
            this.requestOtp(res['emails'][0].uuid);
        }, error => {
            console.log('Error getting UUID:', error);
            if (error.status === 412) {
                this.requestOtp(error.error['emails'][0].uuid);
            }
            else {
                this.matSnackBar.open('Unauthorized Access', 'Close', {
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    duration: 3000
                });
                this.loading = false;
            }
        });
    }
    joinConversation(fundingSourceUuid, authToken) {
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
        };
        this.loading = true;
        this.beampayPluginService.joinConversation(request, this.terminalKey, authToken).subscribe((res) => {
            console.log(res);
            this.loading = false;
            if (res.status === 'pending' || res.status === 'processing' || res.status === 'ready') {
                this.getConversationStatus(res.uuid, authToken);
            }
            else {
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
    getConversationStatus(referenceIdentifier, authToken) {
        this.loading = true;
        this.beampayPluginService.getConversationStatus(referenceIdentifier, this.terminalKey, authToken).subscribe((res) => {
            console.log(res);
            if (res.status === 'pending' || res.status === 'ready' || res.status === 'processing') {
                setTimeout(() => {
                    this.getConversationStatus(referenceIdentifier, authToken);
                }, 3000);
            }
            else if (res.status === 'aborted') {
                this.matSnackBar.open(res.message, 'Close', {
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                });
                this.loading = false;
                this.router.navigate(['/']);
            }
            else if (res.status === 'successful') {
                this.matSnackBar.open(res.message, 'Close', {
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                });
                this.loading = false;
                this.router.navigate(['/']);
            }
            else {
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
        });
    }
}
BeamEmailConfirmationFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeamEmailConfirmationFormComponent, deps: [{ token: i1$1.FormBuilder }, { token: i2.Router }, { token: BeampayPluginService }, { token: i4$1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component });
BeamEmailConfirmationFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BeamEmailConfirmationFormComponent, selector: "app-beam-email-confirmation-form", inputs: { showGateway: "showGateway", amount: "amount", lineItems: "lineItems", terminalKey: "terminalKey" }, ngImport: i0, template: "<mat-card class=\"mat-background-white\">\n  <div class=\"loader-overlay\" *ngIf=\"loading\">\n    <mat-spinner mode=\"indeterminate\" diameter=\"30\"></mat-spinner>\n  </div>\n  <form [formGroup]=\"authForm\" *ngIf=\"!showGateway\" class=\"main-content\" [class.blurred]=\"loading\">\n    <img src=\"https://beamwallet.com/about-us/wp-content/uploads/2021/03/logo_beam.png\"\n         alt=\"Beam Logo\" class=\"logo logo-style\" />\n    <p class=\"mat-caption\">Authenticate with your Beam account to receive One Time Password before making a\n      purchase.</p>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"!showOtp\">\n      <mat-label>Email Address</mat-label>\n      <input matInput placeholder=\"Enter your email address\" formControlName=\"email\">\n      <mat-error *ngIf=\"authForm.get('email')?.invalid && authForm.get('email')?.touched\">\n        Please enter a valid email address\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"!showOtp\">\n      <mat-label>Pin Code</mat-label>\n      <input matInput type=\"password\" placeholder=\"Enter your pin code\" formControlName=\"pinCode\" required>\n      <mat-error *ngIf=\"authForm.get('pinCode')?.hasError('required')\">\n        Pin Code is required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" class=\"full-width\" *ngIf=\"showOtp\">\n      <mat-label>Enter Your One Time Password</mat-label>\n      <input\n        matInput\n        maxlength=\"6\"\n        formControlName=\"otp\"\n        autocomplete=\"one-time-code\"\n        placeholder=\"123456\"\n      />\n      <mat-error *ngIf=\"authForm.get('otp')?.hasError('required')\">\n        OTP is required.\n      </mat-error>\n      <mat-error *ngIf=\"authForm.get('otp')?.hasError('pattern')\">\n        OTP must be 6 digits.\n      </mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" class=\"bg-pink\" (click)=\"getUuid()\" *ngIf=\"!showOtp\" type=\"button\">\n      Request One Time Password\n    </button>\n\n\n    <div class=\"privacy-section\">\n      <p class=\"mat-caption\">\n        Your personal data will be used to process your order, to improve your experience throughout the store\n        and for the purposes described in our\n        <a href=\"#\">privacy policy</a>.\n      </p>\n\n      <mat-checkbox formControlName=\"acceptTerms\" class=\"mat-caption\">\n        I have read and accept the store's <a href=\"#\">terms and conditions</a>\n      </mat-checkbox>\n      <mat-error *ngIf=\"authForm.get('acceptTerms')?.invalid && authForm.get('acceptTerms')?.touched\"\n                 class=\"mat-caption\">\n        You must accept terms and conditions\n      </mat-error>\n    </div>\n    <button mat-raised-button class=\"full-width margin bg-pink text-white\" (click)=\"finalizeOrder()\" [disabled]=\"!authForm.get('otp')?.valid\">\n      Finalize Order\n    </button>\n  </form>\n  <div *ngIf=\"showGateway\">\n      <app-gateway></app-gateway>\n  </div>\n</mat-card>\n\n\n", styles: [".full-width{width:100%}.margin{margin-top:5%}.privacy-section{font-size:14px;color:#333}.logo-style{width:20%;margin-top:1%}.bg-pink{background-color:#ff2069}.text-white{color:#fff}.loader-container{display:flex;justify-content:center;align-items:center;min-height:200px}svg{width:40px!important;height:40px!important}.loader-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#ffffffb3;z-index:1000;display:flex;align-items:center;justify-content:center}.main-content.blurred{filter:blur(2px);pointer-events:none;-webkit-user-select:none;user-select:none}\n"], components: [{ type: i5$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i6$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i5.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: GatewayComponent, selector: "app-gateway" }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i4.MatLabel, selector: "mat-label" }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { type: i4.MatError, selector: "mat-error", inputs: ["id"] }, { type: i1$1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i1$1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeamEmailConfirmationFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-beam-email-confirmation-form', template: "<mat-card class=\"mat-background-white\">\n  <div class=\"loader-overlay\" *ngIf=\"loading\">\n    <mat-spinner mode=\"indeterminate\" diameter=\"30\"></mat-spinner>\n  </div>\n  <form [formGroup]=\"authForm\" *ngIf=\"!showGateway\" class=\"main-content\" [class.blurred]=\"loading\">\n    <img src=\"https://beamwallet.com/about-us/wp-content/uploads/2021/03/logo_beam.png\"\n         alt=\"Beam Logo\" class=\"logo logo-style\" />\n    <p class=\"mat-caption\">Authenticate with your Beam account to receive One Time Password before making a\n      purchase.</p>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"!showOtp\">\n      <mat-label>Email Address</mat-label>\n      <input matInput placeholder=\"Enter your email address\" formControlName=\"email\">\n      <mat-error *ngIf=\"authForm.get('email')?.invalid && authForm.get('email')?.touched\">\n        Please enter a valid email address\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" class=\"full-width\" *ngIf=\"!showOtp\">\n      <mat-label>Pin Code</mat-label>\n      <input matInput type=\"password\" placeholder=\"Enter your pin code\" formControlName=\"pinCode\" required>\n      <mat-error *ngIf=\"authForm.get('pinCode')?.hasError('required')\">\n        Pin Code is required\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" class=\"full-width\" *ngIf=\"showOtp\">\n      <mat-label>Enter Your One Time Password</mat-label>\n      <input\n        matInput\n        maxlength=\"6\"\n        formControlName=\"otp\"\n        autocomplete=\"one-time-code\"\n        placeholder=\"123456\"\n      />\n      <mat-error *ngIf=\"authForm.get('otp')?.hasError('required')\">\n        OTP is required.\n      </mat-error>\n      <mat-error *ngIf=\"authForm.get('otp')?.hasError('pattern')\">\n        OTP must be 6 digits.\n      </mat-error>\n    </mat-form-field>\n\n    <button mat-raised-button color=\"primary\" class=\"bg-pink\" (click)=\"getUuid()\" *ngIf=\"!showOtp\" type=\"button\">\n      Request One Time Password\n    </button>\n\n\n    <div class=\"privacy-section\">\n      <p class=\"mat-caption\">\n        Your personal data will be used to process your order, to improve your experience throughout the store\n        and for the purposes described in our\n        <a href=\"#\">privacy policy</a>.\n      </p>\n\n      <mat-checkbox formControlName=\"acceptTerms\" class=\"mat-caption\">\n        I have read and accept the store's <a href=\"#\">terms and conditions</a>\n      </mat-checkbox>\n      <mat-error *ngIf=\"authForm.get('acceptTerms')?.invalid && authForm.get('acceptTerms')?.touched\"\n                 class=\"mat-caption\">\n        You must accept terms and conditions\n      </mat-error>\n    </div>\n    <button mat-raised-button class=\"full-width margin bg-pink text-white\" (click)=\"finalizeOrder()\" [disabled]=\"!authForm.get('otp')?.valid\">\n      Finalize Order\n    </button>\n  </form>\n  <div *ngIf=\"showGateway\">\n      <app-gateway></app-gateway>\n  </div>\n</mat-card>\n\n\n", styles: [".full-width{width:100%}.margin{margin-top:5%}.privacy-section{font-size:14px;color:#333}.logo-style{width:20%;margin-top:1%}.bg-pink{background-color:#ff2069}.text-white{color:#fff}.loader-container{display:flex;justify-content:center;align-items:center;min-height:200px}svg{width:40px!important;height:40px!important}.loader-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#ffffffb3;z-index:1000;display:flex;align-items:center;justify-content:center}.main-content.blurred{filter:blur(2px);pointer-events:none;-webkit-user-select:none;user-select:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }, { type: i2.Router }, { type: BeampayPluginService }, { type: i4$1.MatSnackBar }]; }, propDecorators: { showGateway: [{
                type: Input
            }], amount: [{
                type: Input
            }], lineItems: [{
                type: Input
            }], terminalKey: [{
                type: Input
            }] } });

class BeampayPluginComponent {
    constructor() {
        this.showGateway = false;
    }
    ngOnInit() {
        console.log(this.terminalKey);
    }
    set terminalKey(value) {
        this._terminalKey = value;
        if (value) {
            sessionStorage.setItem('terminalKey', value);
            console.log('terminalKey saved to sessionStorage:', value);
        }
    }
}
BeampayPluginComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BeampayPluginComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BeampayPluginComponent, selector: "lib-beampay-plugin", inputs: { showGateway: "showGateway", amount: "amount", lineItems: "lineItems", terminalKey: "terminalKey" }, ngImport: i0, template: `
    <app-beam-email-confirmation-form [showGateway]="showGateway" [amount]="amount" [lineItems]="lineItems"
                                      [terminalKey]="_terminalKey"></app-beam-email-confirmation-form>
  `, isInline: true, components: [{ type: BeamEmailConfirmationFormComponent, selector: "app-beam-email-confirmation-form", inputs: ["showGateway", "amount", "lineItems", "terminalKey"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-beampay-plugin',
                    template: `
    <app-beam-email-confirmation-form [showGateway]="showGateway" [amount]="amount" [lineItems]="lineItems"
                                      [terminalKey]="_terminalKey"></app-beam-email-confirmation-form>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { showGateway: [{
                type: Input
            }], amount: [{
                type: Input
            }], lineItems: [{
                type: Input
            }], terminalKey: [{
                type: Input
            }] } });

const routes = [
    {
        path: "",
        component: BeampayPluginComponent,
    },
    {
        path: "otp-confirmation",
        component: GatewayComponent,
    }
];
class BeampayPluginRouterModule {
}
BeampayPluginRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BeampayPluginRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, imports: [i2.RouterModule], exports: [RouterModule] });
BeampayPluginRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, imports: [[RouterModule.forRoot(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule],
                }]
        }] });

class BeampayPluginModule {
}
BeampayPluginModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BeampayPluginModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginModule, declarations: [BeampayPluginComponent,
        BeamEmailConfirmationFormComponent,
        GatewayComponent], imports: [BeampayPluginRouterModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        HttpClientModule,
        MatSnackBarModule,
        MatProgressSpinnerModule], exports: [BeampayPluginComponent,
        BeamEmailConfirmationFormComponent,
        GatewayComponent] });
BeampayPluginModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginModule, imports: [[
            BeampayPluginRouterModule,
            MatInputModule,
            MatCardModule,
            ReactiveFormsModule,
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            HttpClientModule,
            MatSnackBarModule,
            MatProgressSpinnerModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BeampayPluginComponent,
                        BeamEmailConfirmationFormComponent,
                        GatewayComponent
                    ],
                    imports: [
                        BeampayPluginRouterModule,
                        MatInputModule,
                        MatCardModule,
                        ReactiveFormsModule,
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        HttpClientModule,
                        MatSnackBarModule,
                        MatProgressSpinnerModule
                    ],
                    exports: [
                        BeampayPluginComponent,
                        BeamEmailConfirmationFormComponent,
                        GatewayComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of beampay-plugin
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BeamEmailConfirmationFormComponent, BeampayPluginComponent, BeampayPluginModule, BeampayPluginService, GatewayComponent };
//# sourceMappingURL=beampay-plugin.mjs.map
