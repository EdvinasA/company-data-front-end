import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemsList: Cart[] = [];
  public cartItems = new Subject<Cart[]>();
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
}
