import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GatewayComponent } from "./gateway-form/gateway.component";
import { BeampayPluginComponent } from "./beampay-plugin.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class BeampayPluginRouterModule {
}
BeampayPluginRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BeampayPluginRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, imports: [i1.RouterModule], exports: [RouterModule] });
BeampayPluginRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, imports: [[RouterModule.forRoot(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forRoot(routes)],
                    exports: [RouterModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhbXBheS1wbHVnaW4tcm91dGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2JlYW1wYXktcGx1Z2luL3NyYy9saWIvYmVhbXBheS1wbHVnaW4tcm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFJckQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRWxFLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0JBQXNCO0tBQ2xDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFNBQVMsRUFBRSxnQkFBZ0I7S0FDNUI7Q0FBQyxDQUFDO0FBTUwsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCLHdDQUYxQixZQUFZO3VIQUVYLHlCQUF5QixZQUgzQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDN0IsWUFBWTsyRkFFWCx5QkFBeUI7a0JBSnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtcclxuICBCZWFtRW1haWxDb25maXJtYXRpb25Gb3JtQ29tcG9uZW50XHJcbn0gZnJvbSBcIi4vYmVhbS1lbWFpbC1jb25maXJtYXRpb24tZm9ybS9iZWFtLWVtYWlsLWNvbmZpcm1hdGlvbi1mb3JtLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0dhdGV3YXlDb21wb25lbnR9IGZyb20gXCIuL2dhdGV3YXktZm9ybS9nYXRld2F5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0JlYW1wYXlQbHVnaW5Db21wb25lbnR9IGZyb20gXCIuL2JlYW1wYXktcGx1Z2luLmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCJcIixcclxuICAgIGNvbXBvbmVudDogQmVhbXBheVBsdWdpbkNvbXBvbmVudCxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwib3RwLWNvbmZpcm1hdGlvblwiLFxyXG4gICAgY29tcG9uZW50OiBHYXRld2F5Q29tcG9uZW50LFxyXG4gIH1dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCZWFtcGF5UGx1Z2luUm91dGVyTW9kdWxlIHtcclxufVxyXG4iXX0=