import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation, User } from '../../../../../models/user';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-withdrawal-at-client-center',
  templateUrl: './withdrawal-at-client-center.component.html',
  styleUrls: ['./withdrawal-at-client-center.component.scss'],
})
export class WithdrawalAtClientCenterComponent implements OnInit {
  @Input() public withdrawalAtClientCenterForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();
  public user!: User | null;

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
