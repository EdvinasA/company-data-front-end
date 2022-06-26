import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {BehaviorSubject, Subject} from "rxjs";
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
    if (this.cartItemsList.includes(item)) {
      // @ts-ignore
      let item = this.cartItemsList.find(cartItem => cartItem.id === item.id);
      if (item != null) {
        // @ts-ignore
        this.cartItemsList.find(cartItem => cartItem.id === item.id).quantity += 1;
      }
    }
    this.cartItemsList.push(item);

    this.itemsList.next(this.cartItemsList);
  }

  findIndexToUpdate(item: Cart) {
    // @ts-ignore
    return item.id === this;
  }
}
