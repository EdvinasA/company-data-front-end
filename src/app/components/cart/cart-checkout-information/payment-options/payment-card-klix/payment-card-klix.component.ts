import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-payment-card-klix',
  templateUrl: './payment-card-klix.component.html',
  styleUrls: ['./payment-card-klix.component.scss']
})
export class PaymentCardKlixComponent implements OnInit {

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
