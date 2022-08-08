import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart, CartItem} from "../../models/cart";
import {Subscription} from "rxjs";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  cart!: Cart;
  subscription!: Subscription;

  constructor(private cartService: CartService,
              private userService: UserService) {
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      if (user?.id != undefined) {
        this.subscription = this.cartService.getCart(user?.id);
      }
    })
    this.subscription = this.cartService.currentCartList.subscribe(cart => {
      this.cart = cart;
    })
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, 1, false)
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, -1, false)
  }

  keyPressNumbers(event: any, item: CartItem) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.cartService.updateCartItemQuantity(item, 1, false)
    } else
      this.cartService.updateCartItemQuantity(item, event.target.value, true)
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeItemFromCartList(item);
  }

  getCartAmountOfItems() {
    return this.cart?.cartItems?.length;
  }

  createOrder(item: CartItem[]) {

  }

}
