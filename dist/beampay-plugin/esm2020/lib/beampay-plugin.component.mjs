import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./beam-email-confirmation-form/beam-email-confirmation-form.component";
export * from './beam-email-confirmation-form/beam-email-confirmation-form.component';
export * from './gateway-form/gateway.component';
export class BeampayPluginComponent {
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
  `, isInline: true, components: [{ type: i1.BeamEmailConfirmationFormComponent, selector: "app-beam-email-confirmation-form", inputs: ["showGateway", "amount", "lineItems", "terminalKey"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhbXBheS1wbHVnaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYmVhbXBheS1wbHVnaW4vc3JjL2xpYi9iZWFtcGF5LXBsdWdpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7OztBQUN2RCxjQUFjLHVFQUF1RSxDQUFDO0FBQ3RGLGNBQWMsa0NBQWtDLENBQUM7QUFZakQsTUFBTSxPQUFPLHNCQUFzQjtJQU1qQztRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELElBQ0ksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7bUhBckJVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLHdLQVB2Qjs7O0dBR1Q7MkZBSVUsc0JBQXNCO2tCQVRsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRTs7O0dBR1Q7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7MEVBR1UsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFXRixXQUFXO3NCQURkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL2JlYW0tZW1haWwtY29uZmlybWF0aW9uLWZvcm0vYmVhbS1lbWFpbC1jb25maXJtYXRpb24tZm9ybS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9nYXRld2F5LWZvcm0vZ2F0ZXdheS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1iZWFtcGF5LXBsdWdpbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGFwcC1iZWFtLWVtYWlsLWNvbmZpcm1hdGlvbi1mb3JtIFtzaG93R2F0ZXdheV09XCJzaG93R2F0ZXdheVwiIFthbW91bnRdPVwiYW1vdW50XCIgW2xpbmVJdGVtc109XCJsaW5lSXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVybWluYWxLZXldPVwiX3Rlcm1pbmFsS2V5XCI+PC9hcHAtYmVhbS1lbWFpbC1jb25maXJtYXRpb24tZm9ybT5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQmVhbXBheVBsdWdpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgc2hvd0dhdGV3YXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFtb3VudDogYW55O1xuICBASW5wdXQoKSBsaW5lSXRlbXM6IGFueTtcbiAgIF90ZXJtaW5hbEtleSE6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zaG93R2F0ZXdheSA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy50ZXJtaW5hbEtleSlcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0ZXJtaW5hbEtleSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGVybWluYWxLZXkgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Rlcm1pbmFsS2V5JywgdmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coJ3Rlcm1pbmFsS2V5IHNhdmVkIHRvIHNlc3Npb25TdG9yYWdlOicsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxufVxuIl19