import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../../models/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-login-user-menu',
  templateUrl: './login-user-menu.component.html',
  styleUrls: ['./login-user-menu.component.scss'],
})
export class LoginUserMenuComponent implements OnInit {
  public orders: Order[] = [];

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orderSubject.asObservable().subscribe((orders) => {
      if (orders != null || orders != undefined) {
        this.orders = orders;
      }
    });
  }

  changePage(route: string) {
    this.router.navigateByUrl(route);
  }

  signOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
