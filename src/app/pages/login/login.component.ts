import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 btnSignin = document.querySelector("#signin");
 btnSignup = document.querySelector("#signup");
 body = document.querySelector("body");
  constructor() { }

  ngOnInit(): void {
  }

  onSignInClick() {
  }

  onSignUpClick() {
  }

}
