import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { appRoutes } from "./app.router";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeService } from "./pages/home/home.service";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HomeService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
