import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user-menu',
  templateUrl: './login-user-menu.component.html',
  styleUrls: ['./login-user-menu.component.scss'],
})
export class LoginUserMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePage(route: string) {
    this.router.navigateByUrl(route);
  }

  signOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
