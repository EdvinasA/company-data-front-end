import { Component, OnInit } from '@angular/core';
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-withdrawal-at-client-center',
  templateUrl: './withdrawal-at-client-center.component.html',
  styleUrls: ['./withdrawal-at-client-center.component.scss']
})
export class WithdrawalAtClientCenterComponent implements OnInit {

  public user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
