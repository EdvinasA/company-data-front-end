import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-checkout-accept-form',
  templateUrl: './cart-checkout-accept-form.component.html',
  styleUrls: ['./cart-checkout-accept-form.component.scss'],
})
export class CartCheckoutAcceptFormComponent implements OnInit {
  @Input() public formGroup!: FormGroup;
  @Input() public isPaymentStep: boolean = false;
  @Output() public emitCreateOrder = new EventEmitter<unknown>();
  @Output() public onChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.onChange.emit(true);
    if (this.isPaymentStep) {
      this.emitCreateOrder.emit();
    }
  }
}
