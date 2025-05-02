import {RouterModule, Routes} from "@angular/router";
import {
  BeamEmailConfirmationFormComponent
} from "./beam-email-confirmation-form/beam-email-confirmation-form.component";
import {NgModule} from "@angular/core";
import {GatewayComponent} from "./gateway-form/gateway.component";
import {BeampayPluginComponent} from "./beampay-plugin.component";

const routes: Routes = [
  {
    path: "",
    component: BeampayPluginComponent,
  },
  {
    path: "otp-confirmation",
    component: GatewayComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BeampayPluginRouterModule {
}
