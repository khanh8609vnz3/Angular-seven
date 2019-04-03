import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";
import { Constant } from "../model/constant";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private commonService: CommonService) {}

  login(email: string, password: string) {
    return this.commonService.httpPost(Constant.LOGIN_API_URL, {
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem(Constant.TOKEN);
  }

  setToken(token: string) {
    localStorage.setItem(Constant.TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(Constant.TOKEN) || null;
  }
}
