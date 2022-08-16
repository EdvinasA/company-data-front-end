import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-pay-to-courier',
  templateUrl: './pay-to-courier.component.html',
  styleUrls: ['./pay-to-courier.component.scss']
})
export class PayToCourierComponent implements OnInit {

  @Output() option = new EventEmitter<string>();
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
