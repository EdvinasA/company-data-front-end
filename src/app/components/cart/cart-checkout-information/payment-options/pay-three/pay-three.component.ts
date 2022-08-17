import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-pay-three',
  templateUrl: './pay-three.component.html',
  styleUrls: ['./pay-three.component.scss']
})
export class PayThreeComponent implements OnInit {

  @Input() totalSum: number = 0;
  @Input() public paymentForm!: FormGroup;
  public user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
