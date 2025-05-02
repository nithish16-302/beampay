import { NgModule } from '@angular/core';
import { BeampayPluginComponent } from './beampay-plugin.component';
import {BeampayPluginRouterModule} from "./beampay-plugin-router.module";
import {
  BeamEmailConfirmationFormComponent
} from "./beam-email-confirmation-form/beam-email-confirmation-form.component";
import {GatewayComponent} from "./gateway-form/gateway.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
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
})
export class BeampayPluginModule { }
