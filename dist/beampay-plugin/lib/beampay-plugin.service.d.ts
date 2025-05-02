import { HttpClient, HttpResponse } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class BeampayPluginService {
    private http;
    constructor(http: HttpClient);
    sendOtp(requestData: any): import("rxjs").Observable<string>;
    loginWithOtp(requestData: any): import("rxjs").Observable<Object>;
    getUuid(email: any): import("rxjs").Observable<Object>;
    finalizeOrder(requestData: {
        email: any;
        pinCode: any;
        oneTimePassword: any;
    }): import("rxjs").Observable<HttpResponse<Object>>;
    joinConversation(request: any, terminalKey: string, authToken: any): import("rxjs").Observable<Object>;
    getConversationStatus(referenceIdentifier: any, terminalKey: string, authToken: string): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BeampayPluginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BeampayPluginService>;
}
