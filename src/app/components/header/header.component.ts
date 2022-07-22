import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() isUserLoggedIn: boolean = false;
  @Input() userFirstName!: string
  listOfItems: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe(cart => {
      this.listOfItems = cart;
    })
  }

}
