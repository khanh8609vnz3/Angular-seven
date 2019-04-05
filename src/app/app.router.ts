import { Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

export const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "sign-up",
    component: SignUpComponent,
    data: { title: "Sign up" }
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Home" },
    canActivate: [AuthGuardService]
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About" },
    canActivate: [AuthGuardService]
  },
  { path: "**", component: HomeComponent }
];
