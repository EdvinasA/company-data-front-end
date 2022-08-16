import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {User} from "../../../../../models/user";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delivery-to-home',
  templateUrl: './delivery-to-home.component.html',
  styleUrls: ['./delivery-to-home.component.scss']
})
export class DeliveryToHomeComponent implements OnInit {

  @Input() public deliveryToHomeForm!: FormGroup;
  public user: User | null = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
    if (this.user?.deliveryInformation != undefined) {
      this.deliveryToHomeForm.patchValue({
        address: this.user.deliveryInformation[0],
        time: '1',
        shippingOption: 'toHome'
      })
    }
  }
}
