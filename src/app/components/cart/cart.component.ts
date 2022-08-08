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
  user: User | null = {};
  subscription!: Subscription;

  constructor(private cartService: CartService,
              private userService: UserService) {
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      if (user?.id != undefined) {
        this.subscription = this.cartService.getCart(user?.id);
      }
    })
    this.subscription = this.cartService.currentCartList.subscribe(cart => {
      this.cart = cart;
    })
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, 1, false, this.user?.id)
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, -1, false, this.user?.id)
  }

  keyPressNumbers(event: any, item: CartItem) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.cartService.updateCartItemQuantity(item, 1, false, this.user?.id)
    } else
      this.cartService.updateCartItemQuantity(item, event.target.value, true, this.user?.id)
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeItemFromCartList(item, this.user?.id);
  }

  getCartAmountOfItems() {
    return this.cart?.cartItems?.length;
  }

  createOrder(item: CartItem[]) {

  }

}
