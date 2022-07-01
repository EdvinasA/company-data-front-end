import { Component, OnInit } from '@angular/core';
import {Cart} from "../../../models/cart";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-popover',
  templateUrl: './cart-popover.component.html',
  styleUrls: ['./cart-popover.component.scss']
})
export class CartPopoverComponent implements OnInit {

  cartList: Cart[] = [];
  cartListTotalSum = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe(cart => {
      this.cartList = cart;
    })
    this.cartService.currentTotalSum.subscribe(sum => {
      this.cartListTotalSum = sum;
    })
  }
}
