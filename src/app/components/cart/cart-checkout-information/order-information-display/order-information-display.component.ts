import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {User} from "../../../../models/user";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-order-information-display',
  templateUrl: './order-information-display.component.html',
  styleUrls: ['./order-information-display.component.scss']
})
export class OrderInformationDisplayComponent implements OnInit {

  @Input() public deliveryToHomeForm!: FormGroup;
  @Input() public withdrawalAtClientCenterForm!: FormGroup;
  public user: User | null = new User();
  @Input() public totalSumOfAllItemsSubject: number = 0;
  @Input() public deliveryCost: number = 0;
  @Input() public shippingOption: string = '';
  @Input() public amountOfItems: number = 0;
  public orderInformationPanelOpenState = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

}
