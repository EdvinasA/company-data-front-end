import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  changePage(route: string) {
    this.router.navigateByUrl(route);
  }
}
