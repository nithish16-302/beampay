import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { catchError, tap, throwError } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class BeampayPluginService {
    constructor(http) {
        this.http = http;
    }
    sendOtp(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/request-otp`, requestData, { responseType: 'text' });
    }
    loginWithOtp(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData).pipe(tap(event => {
            if (event instanceof HttpResponse && event.status === 412) {
                return event;
            }
            return event;
        }), catchError((error) => {
            if (error.status === 412) {
                // Handle 412 error, for example, by returning the error as is
                return throwError(() => error);
            }
            // Re-throw other errors
            return throwError(() => error);
        }));
    }
    getUuid(email) {
        return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/email/${email}`);
    }
    finalizeOrder(requestData) {
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData, { observe: 'response' });
    }
    joinConversation(request, terminalKey, authToken) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + authToken,
        });
        return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation`, request, { headers: headers });
    }
    getConversationStatus(referenceIdentifier, terminalKey, authToken) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + authToken,
        });
        return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation/${referenceIdentifier}`, { headers: headers });
    }
}
BeampayPluginService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
BeampayPluginService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BeampayPluginService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhbXBheS1wbHVnaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2JlYW1wYXktcGx1Z2luL3NyYy9saWIvYmVhbXBheS1wbHVnaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBZ0MsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzlGLE9BQU8sRUFBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7O0FBS2pELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUNwQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFdBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0VBQWtFLEVBQUUsV0FBVyxFQUFFLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDakksQ0FBQztJQUVELFlBQVksQ0FBQyxXQUFnQjtRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDREQUE0RCxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDbkcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsSUFBSSxLQUFLLFlBQVksWUFBWSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN6RCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDdEMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDeEIsOERBQThEO2dCQUM5RCxPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztZQUNELHdCQUF3QjtZQUN4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsOERBQThELEtBQUssRUFBRSxDQUFDLENBQUE7SUFDN0YsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUErRDtRQUMzRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDREQUE0RCxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQzFILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFZLEVBQUUsV0FBbUIsRUFBRSxTQUFjO1FBQ2hFLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGVBQWUsRUFBRSxTQUFTLEdBQUcsU0FBUztTQUN2QyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdEQUF3RCxXQUFXLGVBQWUsRUFBRSxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUN6SSxDQUFDO0lBRUQscUJBQXFCLENBQUMsbUJBQXdCLEVBQUUsV0FBbUIsRUFBRSxTQUFpQjtRQUNwRixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixlQUFlLEVBQUUsU0FBUyxHQUFHLFNBQVM7U0FDdkMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsV0FBVyxpQkFBaUIsbUJBQW1CLEVBQUUsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ3RKLENBQUM7O2lIQWhEVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge2NhdGNoRXJyb3IsIHRhcCwgdGhyb3dFcnJvcn0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmVhbXBheVBsdWdpblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgc2VuZE90cChyZXF1ZXN0RGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwczovL2FwaS5kZXYuYmVhbXdhbGxldC5jb20vYmVhbWVyLWFwaS92My9iZWFtZXJzL3JlcXVlc3Qtb3RwYCwgcmVxdWVzdERhdGEsIHtyZXNwb25zZVR5cGU6ICd0ZXh0J30pO1xuICB9XG5cbiAgbG9naW5XaXRoT3RwKHJlcXVlc3REYXRhOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHBzOi8vYXBpLmRldi5iZWFtd2FsbGV0LmNvbS9iZWFtZXItYXBpL3YzL2JlYW1lcnMvbG9naW5gLCByZXF1ZXN0RGF0YSkucGlwZShcbiAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSAmJiBldmVudC5zdGF0dXMgPT09IDQxMikge1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MTIpIHtcbiAgICAgICAgICAvLyBIYW5kbGUgNDEyIGVycm9yLCBmb3IgZXhhbXBsZSwgYnkgcmV0dXJuaW5nIHRoZSBlcnJvciBhcyBpc1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZS10aHJvdyBvdGhlciBlcnJvcnNcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0VXVpZChlbWFpbDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vYXBpLmRldi5iZWFtd2FsbGV0LmNvbS9iZWFtZXItYXBpL3YzL2JlYW1lcnMvZW1haWwvJHtlbWFpbH1gKVxuICB9XG5cbiAgZmluYWxpemVPcmRlcihyZXF1ZXN0RGF0YTogeyBlbWFpbDogYW55OyBwaW5Db2RlOiBhbnk7IG9uZVRpbWVQYXNzd29yZDogYW55IH0pIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYGh0dHBzOi8vYXBpLmRldi5iZWFtd2FsbGV0LmNvbS9iZWFtZXItYXBpL3YzL2JlYW1lcnMvbG9naW5gLCByZXF1ZXN0RGF0YSwge29ic2VydmU6ICdyZXNwb25zZSd9KTtcbiAgfVxuXG4gIGpvaW5Db252ZXJzYXRpb24ocmVxdWVzdDogYW55LCB0ZXJtaW5hbEtleTogc3RyaW5nLCBhdXRoVG9rZW46IGFueSkge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGBodHRwczovL2FwaS5kZXYuYmVhbXdhbGxldC5jb20vYmVhbWVyLWFwaS92NC9iZWFtZXJzLyR7dGVybWluYWxLZXl9L2NvbnZlcnNhdGlvbmAsIHJlcXVlc3QsIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG4gIH1cblxuICBnZXRDb252ZXJzYXRpb25TdGF0dXMocmVmZXJlbmNlSWRlbnRpZmllcjogYW55LCB0ZXJtaW5hbEtleTogc3RyaW5nLCBhdXRoVG9rZW46IHN0cmluZykge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyBhdXRoVG9rZW4sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHBzOi8vYXBpLmRldi5iZWFtd2FsbGV0LmNvbS9iZWFtZXItYXBpL3Y0L2JlYW1lcnMvJHt0ZXJtaW5hbEtleX0vY29udmVyc2F0aW9uLyR7cmVmZXJlbmNlSWRlbnRpZmllcn1gLCB7aGVhZGVyczogaGVhZGVyc30pO1xuICB9XG59XG4iXX0=