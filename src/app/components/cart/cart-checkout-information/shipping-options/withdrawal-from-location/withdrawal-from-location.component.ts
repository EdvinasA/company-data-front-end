import { Component, OnInit } from '@angular/core';
import {DeliveryInformation, User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-withdrawal-from-location',
  templateUrl: './withdrawal-from-location.component.html',
  styleUrls: ['./withdrawal-from-location.component.scss']
})
export class WithdrawalFromLocationComponent implements OnInit {

  public selectedOption: string = 'dpd';
  public user!: User | null;
  private selectedDeliveryInformationIndex: number = 0;
  public deliveryInformation!: DeliveryInformation | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.deliveryInformation = this.user?.deliveryInformation[this.selectedDeliveryInformationIndex];
    })
  }

  selectOption(input: string) {
    this.selectedOption = input;
  }

}
