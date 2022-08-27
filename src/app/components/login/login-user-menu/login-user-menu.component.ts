import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Order} from '../../../models/order';
import {OrderService} from '../../../services/order.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login-user-menu',
  templateUrl: './login-user-menu.component.html',
  styleUrls: ['./login-user-menu.component.scss'],
})
export class LoginUserMenuComponent implements OnInit {
  public orders: Order[] | null = [];

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orderSubject.asObservable().subscribe((orders) => {
      this.orders = orders;
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
