import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export * from './beam-email-confirmation-form/beam-email-confirmation-form.component';
export * from './gateway-form/gateway.component';
export declare class BeampayPluginComponent implements OnInit {
    showGateway: boolean;
    amount: any;
    lineItems: any;
    _terminalKey: string;
    constructor();
    ngOnInit(): void;
    set terminalKey(value: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<BeampayPluginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BeampayPluginComponent, "lib-beampay-plugin", never, { "showGateway": "showGateway"; "amount": "amount"; "lineItems": "lineItems"; "terminalKey": "terminalKey"; }, {}, never, never>;
}
