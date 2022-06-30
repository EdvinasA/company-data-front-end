import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Subject, Subscription} from "rxjs";
import {Cart} from "../../models/cart";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  numberOfCartItems = 0;
  subscription = new Subscription();
  unsubscribeSignal: Subject<number> = new Subject();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCartList.subscribe(cart => {
      this.numberOfCartItems = cart.length;
    })
  }

  shouldDisplayHeader() {
    return true;
  }

  ngOnDestroy(): void {
    this.unsubscribeSignal.next();
  }

}
