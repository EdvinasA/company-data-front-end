import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../services/user.service";
import {User} from "../../../../../models/user";
import {ConverterService} from "../../../../../services/converter.service";

@Component({
  selector: 'app-delivery-to-home',
  templateUrl: './delivery-to-home.component.html',
  styleUrls: ['./delivery-to-home.component.scss']
})
export class DeliveryToHomeComponent implements OnInit {

  public user: User | null = new User();
  public defaultAddressValue: number = 0;

  constructor(private userService: UserService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }
}
