import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Cart, CartItem } from '../models/cart';
import { ApiGatewayService } from './api-gateway.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsTotalSum: number = 0;
  private cartItemsTotal = new BehaviorSubject(this.cartItemsTotalSum);
  public currentTotalSum = this.cartItemsTotal.asObservable();

  private cartItemsList: Cart = new Cart();
  private itemsList = new BehaviorSubject(this.cartItemsList);
  public currentCartList = this.itemsList.asObservable();

  private userIsLoaded: boolean = false;

  constructor(
    private http: ApiGatewayService,
    private userService: UserService
  ) {
    this.cartItemsList.cartItems = [];
    this.userService.userWasLoaded.asObservable().subscribe((isLogged) => {
      this.userIsLoaded = isLogged;
    });
  }

  updateCartListInsuranceValue(item: CartItem, userId: string | undefined) {
    let itemInCart = this.getItemInCart(item);
    if (itemInCart != undefined) {
      this.cartItemsList.cartItems[
        this.findIndexToUpdate(itemInCart)
      ].itemInsurance =
        !this.cartItemsList.cartItems[this.findIndexToUpdate(itemInCart)]
          .itemInsurance;
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
    if (this.userIsLoaded) {
      this.updateCart(this.itemsList.getValue(), userId).subscribe();
    }
  }

  updateCartListWarrantyValue(item: CartItem, userId: string | undefined) {
    let itemInCart = this.getItemInCart(item);
    if (itemInCart != undefined) {
      this.cartItemsList.cartItems[
        this.findIndexToUpdate(itemInCart)
      ].itemWarranty =
        !this.cartItemsList.cartItems[this.findIndexToUpdate(itemInCart)]
          .itemWarranty;
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
    if (this.userIsLoaded) {
      this.updateCart(this.itemsList.getValue(), userId).subscribe();
    }
  }

  private getItemInCart(item: CartItem) {
    return this.cartItemsList?.cartItems?.find(
      (cartItem) => cartItem.itemId === item.itemId
    );
  }

  updateCartList(item: CartItem, userId: string | undefined) {
    let itemInCart = this.cartItemsList?.cartItems?.find(
      (cartItem) => cartItem.itemId === item.itemId
    );
    if (itemInCart != undefined) {
      this.cartItemsList.cartItems[
        this.findIndexToUpdate(itemInCart)
      ].itemQuantity += 1;
    } else {
      this.cartItemsList.cartItems.push(item);
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
    if (this.userIsLoaded) {
      this.updateCart(this.itemsList.getValue(), userId).subscribe();
    }
  }

  updateCartItemQuantity(
    item: CartItem,
    quantity: number,
    isUserInput: boolean,
    userId: string | undefined
  ) {
    let itemInCart = this.cartItemsList.cartItems.find(
      (cartItem) => cartItem.itemId === item.itemId
    );
    if (itemInCart != undefined && !isUserInput) {
      this.cartItemsList.cartItems[
        this.findIndexToUpdate(itemInCart)
      ].itemQuantity += quantity;
    }
    if (itemInCart != undefined && isUserInput) {
      this.cartItemsList.cartItems[
        this.findIndexToUpdate(itemInCart)
      ].itemQuantity = quantity;
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
    if (this.userIsLoaded) {
      this.updateCart(this.itemsList.getValue(), userId).subscribe();
    }
  }

  removeItemFromCartList(item: CartItem, userId: string | undefined) {
    let itemInCartIndex = this.findIndexToUpdate(item);

    this.cartItemsList.cartItems.splice(itemInCartIndex, 1);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
    this.itemsList.next(this.cartItemsList);
    if (this.userIsLoaded) {
      this.updateCart(this.itemsList.getValue(), userId).subscribe();
    }
  }

  findIndexToUpdate(item: CartItem) {
    return this.cartItemsList.cartItems.findIndex(
      (cartItem) => cartItem.itemId === item.itemId
    );
  }

  getCart(userId: string | undefined): Subscription {
    return this.http
      .get<Cart>(`/cart/${userId}`)
      .pipe()
      .subscribe((cart) => {
        this.cartItemsList = cart;
        this.itemsList.next(cart);
        this.cartItemsTotal.next(this.calculateTotalSumOfAllItems());
      });
  }

  updateCart(cart: Cart, userId: string | undefined): Observable<void> {
    return this.http.put(`/cart/${userId}`, cart);
  }

  calculateTotalSumOfAllItems() {
    let totalSum = 0;
    if (this.cartItemsList.cartItems.length !== 0) {
      this.cartItemsList.cartItems.forEach((cart) => {
        totalSum += cart.itemPrice * cart.itemQuantity;
        totalSum += this.checkCartIfWarrantyValueIsTrue(cart);
        totalSum += this.checkCartIfInsuranceValueIsTrue(cart);
      });
      return totalSum;
    } else {
      return totalSum;
    }
  }

  checkCartIfWarrantyValueIsTrue(cartItem: CartItem) {
    if (cartItem.itemWarranty) {
      return 39.99;
    }
    return 0;
  }

  checkCartIfInsuranceValueIsTrue(cartItem: CartItem) {
    if (cartItem.itemInsurance) {
      return 39.99;
    }
    return 0;
  }
}
