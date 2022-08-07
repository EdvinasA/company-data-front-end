import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart, CartItem} from "../models/cart";
import {UserService} from "./user.service";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsTotalSum: number = 0;
  private cartItemsTotal = new BehaviorSubject(this.cartItemsTotalSum);
  public currentTotalSum = this.cartItemsTotal.asObservable();

  private cartItemsList: Cart = new Cart();
  private itemsList = new BehaviorSubject(this.cartItemsList);
  public currentCartList = this.itemsList.asObservable();

  private user: User | null = {};

  constructor(private http: ApiGatewayService,
              private userService: UserService) {
    this.cartItemsList.cartItems = [];
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
    if (this.user?.id != undefined) {
      this.getCart(this.user.id).subscribe(cart => {
        this.itemsList.next(cart);
      });
    }
  }

  updateCartList(item: CartItem) {
    let itemInCart = this.cartItemsList?.cartItems?.find(cartItem => cartItem.itemId === item.itemId);
    if (itemInCart != undefined) {
      this.cartItemsList.cartItems[this.findIndexToUpdate(itemInCart)].itemQuantity += 1;
    } else {
      this.cartItemsList.cartItems.push(item);
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems())
  }

  updateCartItemQuantity(item: CartItem, quantity: number, isUserInput: boolean) {
    let itemInCart = this.cartItemsList.cartItems.find(cartItem => cartItem.itemId === item.itemId);
    if (itemInCart != undefined && !isUserInput) {
      this.cartItemsList.cartItems[this.findIndexToUpdate(itemInCart)].itemQuantity += quantity
    }
    if (itemInCart != undefined && isUserInput) {
      this.cartItemsList.cartItems[this.findIndexToUpdate(itemInCart)].itemQuantity = quantity
    }

    this.itemsList.next(this.cartItemsList);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems())
  }

  removeItemFromCartList(item: CartItem) {
    let itemInCartIndex = this.findIndexToUpdate(item);

    this.cartItemsList.cartItems.splice(itemInCartIndex, 1);
    this.cartItemsTotal.next(this.calculateTotalSumOfAllItems())
  }

  findIndexToUpdate(item: CartItem) {
    return this.cartItemsList.cartItems.findIndex(cartItem => cartItem.itemId === item.itemId)
  }

  getCart(userId: string): Observable<Cart> {
    return this.http.get<Cart>(`/cart/${userId}`);
  }

  updateCart(cart: Cart) {
    return this.http.put<Cart>(`/cart`, cart);
  }

  calculateTotalSumOfAllItems() {
    let totalSum = 0;
    if (this.cartItemsList.cartItems.length !== 0) {
      this.cartItemsList.cartItems.forEach(cart => {
        totalSum += (cart.itemPrice * cart.itemQuantity);
      })
      return totalSum;
    } else {
      return totalSum;
    }
  }
}
