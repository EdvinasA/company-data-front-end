import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation, User } from '../../../../../models/user';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-delivery-to-home',
  templateUrl: './delivery-to-home.component.html',
  styleUrls: ['./delivery-to-home.component.scss'],
})
export class DeliveryToHomeComponent implements OnInit {
  @Input() public deliveryToHomeForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Input() public isDeliveryInformationSelected: boolean = false;

  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();
  public user: User | null = new User();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
    });
  }

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
