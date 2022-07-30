import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Register} from "../models/register";
import {Login} from "../models/login";
import {WishlistCreate} from "../models/wishlist";
import {SubscriptionDetails, User, UserUpdateInput} from "../models/user";

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

  public convertToWishlistBody(name: FormControl) {
    let body: WishlistCreate = {
      name: name.value
    };

    return body;
  }

  public convertToUpdateUserInput(user: User) {
    let input: UserUpdateInput = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      subscriptionDetails: user.subscriptionDetails,
      role: user.role
    };

    return input;
  }
}
