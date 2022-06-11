import { Component, OnInit } from '@angular/core';
import {Tokens} from "../../models/tokens";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {ConverterService} from "../../services/converter.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public hide = true;
  public token!: User | null;
  public registerForm = new FormGroup({
    email: new FormControl('asda@gmail.com', [Validators.required, Validators.email]),
    fullName: new FormControl('Edvinas Alimas', [Validators.required]),
    password: new FormControl('asd', [Validators.required]),
  });

  constructor(private router: Router,
              private userService: UserService,
              private converter: ConverterService) { }

  ngOnInit(): void {
  }

  submitRegisterForm(registerForm: FormGroup) {
    let registerBody = this.converter.convertRegisterFormToBody(registerForm);

    this.userService.register(registerBody);
  }

  get email() {
    return this.registerForm.get('email');
  }

  get fullName() {
    return this.registerForm.get('fullName');
  }

  get password() {
    return this.registerForm.get('password');
  }

}
