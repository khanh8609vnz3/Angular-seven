import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router/src/router_state";
import { LoginService } from "./login.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = route["_routerState"]["url"];

    if (this.loginService.isLogged()) {
      return true;
    }

    this.router.navigate(["/login"], {
      queryParams: { redirectUrl }
    });

    return false;
  }
}
