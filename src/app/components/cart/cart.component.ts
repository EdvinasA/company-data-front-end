import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  // @ts-ignore
  cartList: Cart[];
  subscription!: Subscription;
  unsubscribeSignal: Subject<Cart[]> = new Subject();
  quantity = 1;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCartList.subscribe(cart => {
      this.cartList = cart;
    })
  }

  increaseQuantity(item: Cart) {
    item.quantity += 1;
  }

  decreaseQuantity(item: Cart) {
    item.quantity -= 1;
  }

  handleNegativeValue(event: any) {
    let number = Number(event.target.value);
    if (isNaN(number)) {
      this.quantity = 1;
    }
  }

  removeItemFromCart(item: Cart) {
    this.cartService.removeItemFromCartList(item);
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal.next();
  }

}
