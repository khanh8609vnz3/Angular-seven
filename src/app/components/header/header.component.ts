import { Component, OnInit } from "@angular/core";
import { Constant } from "src/app/model/constant";
import { CustomerService } from "src/app/services/customer.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  ngOnInit() {}

  logout() {
    localStorage.removeItem(Constant.TOKEN);
  }
}
