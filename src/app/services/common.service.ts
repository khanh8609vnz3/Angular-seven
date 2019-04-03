import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Constant } from "../model/constant";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private http: HttpClient) {}

  setHeader() {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(Constant.TOKEN)}`
    });
    return headers;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }

  httpGet(url: string, params?: HttpParams) {
    return this.http
      .get(url, { headers: this.setHeader(), params })
      .pipe(catchError(this.handleError));
  }

  httpPost(url: string, body: object, params?: HttpParams) {
    return this.http
      .post(url, body, { headers: this.setHeader(), params })
      .pipe(catchError(this.handleError));
  }
}
