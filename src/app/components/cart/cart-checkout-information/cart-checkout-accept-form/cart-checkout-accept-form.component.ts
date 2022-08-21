import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-checkout-accept-form',
  templateUrl: './cart-checkout-accept-form.component.html',
  styleUrls: ['./cart-checkout-accept-form.component.scss'],
})
export class CartCheckoutAcceptFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Output() onChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.onChange.emit(true);
  }
}
