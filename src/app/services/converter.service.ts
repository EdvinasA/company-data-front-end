import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Register} from "../components/models/register";

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  public convertRegisterFormToBody(registerForm: FormGroup) {
    let registerBody: Register = {
      email: registerForm.get('email')?.value,
      fullName: registerForm.get('fullName')?.value,
      password: registerForm.get('password')?.value,
    };

    return registerBody;
  }
}
