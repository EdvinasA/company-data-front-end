import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Register} from "../models/register";
import {Login} from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  public convertRegisterFormToBody(registerForm: FormGroup) {
    let registerBody: Register = {
      email: registerForm.get('email')?.value,
      name: registerForm.get('name')?.value,
      lastName: registerForm.get('lastName')?.value,
      password: registerForm.get('password')?.value,
    };

    return registerBody;
  }

  public convertLoginFormToBody(loginForm: FormGroup) {
    let loginBody: Login = {
      email: loginForm.get('email')?.value,
      password: loginForm.get('password')?.value,
    };

    return loginBody;
  }
}
