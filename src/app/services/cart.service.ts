import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsTotalSum: number = 0;
  private cartItemsTotal = new BehaviorSubject(this.cartItemsTotalSum);
  currentTotalSum = this.cartItemsTotal.asObservable();

  public cartItemsList: Cart[] = [];
  private itemsList = new BehaviorSubject(this.cartItemsList);
  currentCartList = this.itemsList.asObservable();

  constructor(private http: ApiGatewayService) {
  }

  updateCartList(item: Cart) {
    let itemInCart = this.cartItemsList.find(cartItem => cartItem.id === item.id);
    if (itemInCart != undefined) {
      this.cartItemsList[this.findIndexToUpdate(itemInCart)].quantity += 1;
    } else {
      this.cartItemsList.push(item);
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems())
  }

  updateCartItemQuantity(item: Cart, quantity: number, isUserInput: boolean) {
    let itemInCart = this.cartItemsList.find(cartItem => cartItem.id === item.id);
    if (itemInCart != undefined && !isUserInput) {
      this.cartItemsList[this.findIndexToUpdate(itemInCart)].quantity += quantity
    }
    if (itemInCart != undefined && isUserInput) {
      this.cartItemsList[this.findIndexToUpdate(itemInCart)].quantity = quantity
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems())
  }

  removeItemFromCartList(item: Cart) {
    let itemInCartIndex = this.findIndexToUpdate(item);

    this.cartItemsList.splice(itemInCartIndex, 1);
  }

  findIndexToUpdate(item: Cart) {
    // @ts-ignore
    return this.cartItemsList.findIndex(cartItem => cartItem.id === item.id)
  }

  getCart(userId: string): Observable<Cart[]> {
    return this.http.get<Cart[]>(`/shop/cart/${userId}`);
  }

  updateCart(cartItem: Cart) {
    return this.http.post<Cart>(`/shop/cart`, cartItem);
  }

  calculateTotalSumOfAllItems() {
    let totalSum = 0;
    if (this.cartItemsList.length !== 0) {
      this.cartItemsList.forEach(cart => {
        totalSum += (cart.price * cart.quantity);
      })
      return totalSum;
    } else {
      return totalSum;
    }
  }
}
