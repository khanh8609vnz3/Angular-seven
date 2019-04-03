import { Injectable } from "@angular/core";
import { Constant } from "../model/constant";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor() {}

  setToken(token) {
    localStorage.setItem(Constant.TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(Constant.TOKEN) || null;
  }
}
