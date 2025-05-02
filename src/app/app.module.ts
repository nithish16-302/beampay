import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {BeampayPluginModule} from "beampay-plugin";
import {MatGridListModule} from "@angular/material/grid-list";
import {BeamPayLoginComponent} from "./beam-pay-login/beam-pay-login.component";
import {BeamPayGatewayComponent} from "./beam-pay-gateway/beam-pay-gateway.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-router.module";

@NgModule({
  declarations: [
    AppComponent,
    BeamPayLoginComponent,
    BeamPayGatewayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BeampayPluginModule,
    MatGridListModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
