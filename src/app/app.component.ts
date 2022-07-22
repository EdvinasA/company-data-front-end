import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./services/user.service";
import {Subscription} from "rxjs";
import {User} from "./models/user";
import {WishlistService} from "./services/wishlist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Shop';
  isUserLoggedIn: boolean = false;
  user!: User | null;
  token: string | undefined | null = localStorage.getItem('token');
  subscription!: Subscription;

  constructor(private router: Router,
              private userService: UserService,
              private wishlistService: WishlistService) {
  }

  ngOnInit(): void {
    if (this.token != null || this.token != undefined) {
      this.subscription = this.userService.validate(this.token);
      this.userService.userWasLoaded.asObservable().subscribe(data => {
        this.isUserLoggedIn = data;
      });
      this.userService.userSubject.asObservable().subscribe(user => {
        this.user = user;
        if (user?.id != undefined) {
          this.wishlistService.getWishlist(user?.id);
        }
      })
    }
  }

  isCorrectPath() {
    if (this.router.url === "/profile") {
      return true;
    }
    if (this.router.url === "/orders") {
      return true;
    }
    if (this.router.url.includes("/wishlist")) {
      return true;
    }
    if (this.router.url === "/viewed-items") {
      return true;
    }
    if (this.router.url === "/subscriptions") {
      return true;
    }
    return false;
  }
}
