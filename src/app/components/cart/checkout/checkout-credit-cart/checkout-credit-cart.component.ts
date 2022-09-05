import { Component, OnInit } from '@angular/core';
import {Country} from "../../../../models/country";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CheckoutService} from "../../../../services/checkout.service";

@Component({
  selector: 'app-checkout-credit-cart',
  templateUrl: './checkout-credit-cart.component.html',
  styleUrls: ['./checkout-credit-cart.component.scss']
})
export class CheckoutCreditCartComponent implements OnInit {
  countries: Country[] = [];
  checkoutCreditCardForm = new FormGroup({
    cardNumber: new FormControl('', Validators.required),
    expiration: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required),
    country: new FormControl('Lithuania', Validators.required),
  });

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.checkoutCreditCardForm.value);
  }
}
