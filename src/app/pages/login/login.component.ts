import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { LoginResultModel } from "src/app/model/loginResultModel";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email = "khanh9507@gmail.com";
  password = "123456";

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  tryLogin() {
    this.loginService.login(this.email, this.password).subscribe(
      (response: LoginResultModel) => {
        if (response.token) {
          var url: string;
          this.loginService.setToken(response.token);
          this.route.queryParams.subscribe(params => {
            url = params.redirectUrl;
          });
          this.router.navigateByUrl(url);
        }
      },
      response => {
        alert(response.error.error);
      }
    );
  }
}
