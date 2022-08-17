import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-pay-to-courier',
  templateUrl: './pay-to-courier.component.html',
  styleUrls: ['./pay-to-courier.component.scss']
})
export class PayToCourierComponent implements OnInit {

  @Output() option = new EventEmitter<string>();
  @Input() public paymentForm!: FormGroup;
  public user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
