import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../../services/checkout.service";
import {Country} from "../../../models/country";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  countries: Country[] = [];
  checkoutCreditCardForm = new FormGroup({
    cardNumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required),
    country: new FormControl('Lithuania', Validators.required),
  });

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.checkoutCreditCardForm.value);
  }


}
