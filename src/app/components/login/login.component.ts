import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Tokens } from "../models/tokens";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide = true;
  public token!: Tokens | null;
  public loginForm = new FormGroup({
    email: new FormControl('asda@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('asd', [Validators.required]),
  });

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  submitLoginForm(loginForm: FormGroup) {
    this.userService.login(loginForm)
    .subscribe(data => {
      this.token = data;
      localStorage.setItem('token', this.token.token)
    })
    // this.router.navigate(['/']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
