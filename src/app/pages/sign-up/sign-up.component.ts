import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.minLength(4)]),
    password: new FormControl("", Validators.required)
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.signUpForm.value);
  }
}
