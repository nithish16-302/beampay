import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class GatewayComponent implements OnInit {
    private fb;
    private httpClient;
    beamGatewayForm: FormGroup;
    constructor(fb: FormBuilder, httpClient: HttpClient);
    ngOnInit(): void;
    onSaveChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GatewayComponent, "app-gateway", never, {}, {}, never, never>;
}
