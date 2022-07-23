import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  color: ThemePalette = 'primary';
  user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
