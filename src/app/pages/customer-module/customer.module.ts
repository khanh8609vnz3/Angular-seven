import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { CustomerListComponent } from "./customer-list/customer-list.component";
import { AuthGuardService } from "src/app/services/auth-guard.service";

const customerRoutes: Routes = [
  // {
  //   path: "customer",
  //   redirectTo: "/customer-list",
  //   pathMatch: "full",
  //   canActivate: [AuthGuardService]
  // },
  { path: "", component: CustomerListComponent }
];

@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule, RouterModule.forChild(customerRoutes)]
})
export class CustomerModule {}
