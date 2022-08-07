import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart, CartItem} from "../../models/cart";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  isUserLoggedIn: boolean = false;
  user: User = {};
  isLoading: boolean = true;
  listOfItems: CartItem[] = [];
  token: string | null = localStorage.getItem('token');

  constructor(private cartService: CartService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe(cart => {
      this.listOfItems = cart?.cartItems;
    })
    this.userService.userSubject.asObservable().subscribe(user => {
      if (user != null || user != undefined) {
        this.user = user;
        this.isUserLoggedIn = true;
        this.isLoading = false;
      }
    })
    if (this.token === null) {
      this.isLoading = false;
    }
  }

}
