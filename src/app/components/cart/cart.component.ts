import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Cart[] = [];
  subscription!: Subscription;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCartList.subscribe(cart => {
      this.cartList = cart;
    })
  }

  increaseQuantity(item: Cart) {
    this.cartService.updateCartItemQuantity(item, 1, false)
  }

  decreaseQuantity(item: Cart) {
    this.cartService.updateCartItemQuantity(item, -1, false)
  }

  keyPressNumbers(event: any, item: Cart) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.cartService.updateCartItemQuantity(item, 1, false)
    } else
    this.cartService.updateCartItemQuantity(item, event.target.value, true)
  }

  removeItemFromCart(item: Cart) {
    this.cartService.removeItemFromCartList(item);
  }

}
