import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation, User } from '../../../../../models/user';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-withdrawal-from-location',
  templateUrl: './withdrawal-from-location.component.html',
  styleUrls: ['./withdrawal-from-location.component.scss'],
})
export class WithdrawalFromLocationComponent implements OnInit {
  @Output() option = new EventEmitter<string>();
  @Input() public withdrawalFromLocationForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();
  public selectedOption: string = 'dpd';
  public user!: User | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
    });
    if (this.user != null) {
      this.withdrawalFromLocationForm.patchValue({
        address: this.user.deliveryInformation[0],
        selectedWithdrawalProvider: 'dpd',
      });
    }
  }

  selectOption(input: string) {
    this.selectedOption = input;
    if (this.user != null) {
      this.withdrawalFromLocationForm.patchValue({
        selectedWithdrawalProvider: input,
        locationOfWithdrawal: '',
      });
    }
    this.option.emit(input);
  }

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
