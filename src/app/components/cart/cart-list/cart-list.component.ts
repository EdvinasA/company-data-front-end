import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../../models/cart";
import {User} from "../../../models/user";
import {Subscription} from "rxjs";
import {CartService} from "../../../services/cart.service";
import {UserService} from "../../../services/user.service";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  cart!: Cart;
  user: User | null = {};
  subscription!: Subscription;
  totalSumOfAllItemsSubject: number = 0;

  constructor(private cartService: CartService,
              private userService: UserService,
              private orderService: OrderService) {
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
    this.cartService.currentTotalSum.subscribe(sum => {
      this.totalSumOfAllItemsSubject = sum;
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
    this.orderService.createOrder(item, this.user?.id).subscribe();
  }

}
