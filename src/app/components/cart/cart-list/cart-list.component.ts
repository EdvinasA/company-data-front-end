import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart, CartItem } from '../../../models/cart';
import { User } from '../../../models/user';
import { CartService } from '../../../services/cart.service';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit, OnDestroy {
  public cart!: Cart;
  public user!: User | null;
  private subscription!: Subscription;
  public totalSumOfAllItemsSubject: number = 0;

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
      if (user?.id != undefined) {
        this.subscription = this.cartService.getCart(user?.id);
      }
    });
    this.subscription = this.cartService.currentCartList.subscribe((cart) => {
      this.cart = cart;
    });
    this.cartService.currentTotalSum.subscribe((sum) => {
      this.totalSumOfAllItemsSubject = sum;
    });
  }

  increaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, 1, false, this.user?.id);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.updateCartItemQuantity(item, -1, false, this.user?.id);
  }

  keyPressNumbers(event: any, item: CartItem) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      this.cartService.updateCartItemQuantity(item, 1, false, this.user?.id);
    } else
      this.cartService.updateCartItemQuantity(
        item,
        Number(event.target.value),
        true,
        this.user?.id
      );
  }

  updateWarranty(item: CartItem) {
    this.cartService.updateCartListWarrantyValue(item, this.user?.id);
    item.itemWarranty = !item.itemWarranty;
  }

  updateInsurance(item: CartItem) {
    this.cartService.updateCartListInsuranceValue(item, this.user?.id);
    item.itemInsurance = !item.itemInsurance;
  }

  totalOfItemWithInsurance(item: CartItem) {
    if (item.itemInsurance) {
      return 39.99;
    }
    return 0;
  }

  totalOfItemWithWarranty(item: CartItem) {
    if (item.itemWarranty) {
      return 39.99;
    }
    return 0;
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeItemFromCartList(item, this.user?.id);
  }

  getCartAmountOfItems() {
    return this.cart?.cartItems?.length;
  }

  createOrder(item: CartItem[]) {
    this.router.navigateByUrl('/cart/shipping').then();
  }

  getTotalAmount(item: CartItem) {
    return (
      item.itemQuantity * item.itemPrice +
      this.totalOfItemWithInsurance(item) +
      this.totalOfItemWithWarranty(item)
    );
  }
}
