import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/cart";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title!: string;
  isUserLoggedIn: boolean = false;
  @Input() userFirstName!: string
  isLoading: boolean = true;
  listOfItems: Cart[] = [];

  constructor(private cartService: CartService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe(cart => {
      this.listOfItems = cart;
    })
    this.userService.userSubject.asObservable().subscribe(user => {
      if (user != null || user != undefined) {
        this.isUserLoggedIn = true;
        this.isLoading = false;
      }
    })
  }

}
