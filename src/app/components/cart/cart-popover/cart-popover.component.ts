import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cart';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-popover',
  templateUrl: './cart-popover.component.html',
  styleUrls: ['./cart-popover.component.scss'],
})
export class CartPopoverComponent implements OnInit {
  public cartList: CartItem[] = [];
  public cartListTotalSum = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe((cart) => {
      this.cartList = cart?.cartItems;
    });
    this.cartService.currentTotalSum.subscribe((sum) => {
      this.cartListTotalSum = sum;
    });
  }
}
