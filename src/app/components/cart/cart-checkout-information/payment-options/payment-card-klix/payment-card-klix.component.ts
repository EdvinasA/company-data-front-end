import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../../../models/user";
import {FormGroup} from "@angular/forms";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-payment-card-klix',
  templateUrl: './payment-card-klix.component.html',
  styleUrls: ['./payment-card-klix.component.scss']
})
export class PaymentCardKlixComponent implements OnInit {

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
