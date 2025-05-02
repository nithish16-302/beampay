import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {catchError, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BeampayPluginService {

  constructor(private http: HttpClient) {
  }

  sendOtp(requestData: any) {
    return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/request-otp`, requestData, {responseType: 'text'});
  }

  loginWithOtp(requestData: any) {
    return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData).pipe(
      tap(event => {
        if (event instanceof HttpResponse && event.status === 412) {
          return event;
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 412) {
          // Handle 412 error, for example, by returning the error as is
          return throwError(() => error);
        }
        // Re-throw other errors
        return throwError(() => error);
      })
    );
  }

  getUuid(email: any) {
    return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/email/${email}`)
  }

  finalizeOrder(requestData: { email: any; pinCode: any; oneTimePassword: any }) {
    return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v3/beamers/login`, requestData, {observe: 'response'});
  }

  joinConversation(request: any, terminalKey: string, authToken: any) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + authToken,
    });
    return this.http.post(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation`, request, {headers: headers});
  }

  getConversationStatus(referenceIdentifier: any, terminalKey: string, authToken: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + authToken,
    });
    return this.http.get(`https://api.dev.beamwallet.com/beamer-api/v4/beamers/${terminalKey}/conversation/${referenceIdentifier}`, {headers: headers});
  }
}
