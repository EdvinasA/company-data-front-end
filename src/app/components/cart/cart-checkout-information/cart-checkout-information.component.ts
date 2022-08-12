import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cart-checkout-information',
  templateUrl: './cart-checkout-information.component.html',
  styleUrls: ['./cart-checkout-information.component.scss']
})
export class CartCheckoutInformationComponent implements OnInit {

  shippingDeliveryForm = new FormGroup({
    firstName: new FormControl('Edvinas', [Validators.required]),
    lastName: new FormControl('Alimas', [Validators.required]),
    phoneNumber: new FormControl('+37067964887', [Validators.required]),
    address: new FormControl('Geležinio vilko g. 22-29', [Validators.required]),
    city: new FormControl('Kaunas', [Validators.required]),
    postalCode: new FormControl('LT-99696', [Validators.required]),
    additionalInformation: new FormControl('', ),
  });

  constructor() { }

  ngOnInit(): void {
  }

  formControl(input: string) {
    return this.shippingDeliveryForm.get(input);
  }

}
