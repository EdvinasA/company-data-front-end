import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cart-checkout-accept-form',
  templateUrl: './cart-checkout-accept-form.component.html',
  styleUrls: ['./cart-checkout-accept-form.component.scss']
})
export class CartCheckoutAcceptFormComponent implements OnInit {

  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log(this.formGroup.value);
  }

}
