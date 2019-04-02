import { Injectable } from "@angular/core";

const TOKEN = "TOKEN";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor() {}

  setToken(token) {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) || null;
  }
}
