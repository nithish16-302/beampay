import {RouterModule, Routes} from "@angular/router";
import {BeamPayLoginComponent} from "./beam-pay-login/beam-pay-login.component";
import {BeamPayGatewayComponent} from "./beam-pay-gateway/beam-pay-gateway.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: BeamPayLoginComponent,
  },
  {
    path: "enable-gateway",
    component: BeamPayGatewayComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
