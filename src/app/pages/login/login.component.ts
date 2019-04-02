import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email = "khanh9507@gmail.com";
  password = "123456";

  constructor(
    private api: ApiService,
    private customer: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {}

  tryLogin() {
    this.api.login(this.email, this.password).subscribe(
      response => {
        if (response.token) {
          this.customer.setToken(response.token);
          this.router.navigateByUrl("/home");
        }
      },
      response => {
        alert(response.error.error);
      }
    );
  }
}
