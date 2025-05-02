import { NgModule } from '@angular/core';
import { BeampayPluginComponent } from './beampay-plugin.component';
import { BeampayPluginRouterModule } from "./beampay-plugin-router.module";
import { BeamEmailConfirmationFormComponent } from "./beam-email-confirmation-form/beam-email-confirmation-form.component";
import { GatewayComponent } from "./gateway-form/gateway.component";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import * as i0 from "@angular/core";
export class BeampayPluginModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhbXBheS1wbHVnaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYmVhbXBheS1wbHVnaW4vc3JjL2xpYi9iZWFtcGF5LXBsdWdpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDOztBQTRCNUUsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQXRCNUIsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyxnQkFBZ0IsYUFHaEIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsd0JBQXdCLGFBR3hCLHNCQUFzQjtRQUN0QixrQ0FBa0M7UUFDbEMsZ0JBQWdCO2lIQUdQLG1CQUFtQixZQWxCckI7WUFDUCx5QkFBeUI7WUFDekIsY0FBYztZQUNkLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQix3QkFBd0I7U0FDekI7MkZBT1UsbUJBQW1CO2tCQXhCL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QixrQ0FBa0M7d0JBQ2xDLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5Qjt3QkFDekIsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHNCQUFzQjt3QkFDdEIsa0NBQWtDO3dCQUNsQyxnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlYW1wYXlQbHVnaW5Db21wb25lbnQgfSBmcm9tICcuL2JlYW1wYXktcGx1Z2luLmNvbXBvbmVudCc7XG5pbXBvcnQge0JlYW1wYXlQbHVnaW5Sb3V0ZXJNb2R1bGV9IGZyb20gXCIuL2JlYW1wYXktcGx1Z2luLXJvdXRlci5tb2R1bGVcIjtcbmltcG9ydCB7XG4gIEJlYW1FbWFpbENvbmZpcm1hdGlvbkZvcm1Db21wb25lbnRcbn0gZnJvbSBcIi4vYmVhbS1lbWFpbC1jb25maXJtYXRpb24tZm9ybS9iZWFtLWVtYWlsLWNvbmZpcm1hdGlvbi1mb3JtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHYXRld2F5Q29tcG9uZW50fSBmcm9tIFwiLi9nYXRld2F5LWZvcm0vZ2F0ZXdheS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pbnB1dFwiO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZFwiO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2J1dHRvblwiO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94XCI7XG5pbXBvcnQge0h0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuaW1wb3J0IHtNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyXCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCZWFtcGF5UGx1Z2luQ29tcG9uZW50LFxuICAgIEJlYW1FbWFpbENvbmZpcm1hdGlvbkZvcm1Db21wb25lbnQsXG4gICAgR2F0ZXdheUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQmVhbXBheVBsdWdpblJvdXRlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQmVhbXBheVBsdWdpbkNvbXBvbmVudCxcbiAgICBCZWFtRW1haWxDb25maXJtYXRpb25Gb3JtQ29tcG9uZW50LFxuICAgIEdhdGV3YXlDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCZWFtcGF5UGx1Z2luTW9kdWxlIHsgfVxuIl19