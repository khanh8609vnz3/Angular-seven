import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap, filter, catchError } from "rxjs/operators";

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Object[]> {
    return this.http
      .get<Object[]>("https://jsonplaceholder.typicode.com/todos/")
      .pipe(map(response => response.slice(0, 3)));
  }
}
