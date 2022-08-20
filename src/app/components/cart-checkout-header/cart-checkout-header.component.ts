import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout-header',
  templateUrl: './cart-checkout-header.component.html',
  styleUrls: ['./cart-checkout-header.component.scss'],
})
export class CartCheckoutHeaderComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
