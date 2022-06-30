import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss']
})
export class CartTotalComponent implements OnInit {

  totalSumOfAllItemsSubject: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentTotalSum.subscribe(sum => {
      this.totalSumOfAllItemsSubject = sum;
    })
  }

}
