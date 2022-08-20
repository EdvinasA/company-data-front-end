import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartItem } from '../../models/cart';
import { User } from '../../models/user';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private subscription!: Subscription;
  @Input() title: string = '';
  isUserLoggedIn: boolean = false;
  user!: User | null;
  isLoading: boolean = true;
  listOfItems: CartItem[] = [];
  token: string | null = localStorage.getItem('token');

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      if (user != null || user != undefined) {
        this.user = user;
        if (user?.id != undefined) {
          this.subscription = this.cartService.getCart(user?.id);
        }
        this.cartService.currentCartList.subscribe((cart) => {
          this.listOfItems = cart?.cartItems;
        });
        this.isUserLoggedIn = true;
        this.isLoading = false;
      }
    });
    if (this.token === null) {
      this.isLoading = false;
    }
  }
}
