import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shop';

  constructor(private router: Router) {
  }

  isCorrectPath() {
    if (this.router.url === "/profile") {
      return true;
    }
    if (this.router.url === "/orders") {
      return true;
    }
    if (this.router.url === "/wishlist") {
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
