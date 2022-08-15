import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-withdrawal-at-client-center',
  templateUrl: './withdrawal-at-client-center.component.html',
  styleUrls: ['./withdrawal-at-client-center.component.scss']
})
export class WithdrawalAtClientCenterComponent implements OnInit {

  public selectedDeliveryForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    shippingOption: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl('')
  })
  public user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
