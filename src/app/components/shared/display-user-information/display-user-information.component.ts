import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeliveryInformation, User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-display-user-information',
  templateUrl: './display-user-information.component.html',
  styleUrls: ['./display-user-information.component.scss'],
})
export class DisplayUserInformationComponent implements OnInit {
  @Input() deliveryInformation!: DeliveryInformation | undefined;
  @Output() selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();
  public isFormActivated: boolean = false;
  public isSelectDeliveryProfileActivated: boolean = false;
  public user!: User | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
    });
  }

  onClickActivateSelectProfileForm() {
    this.isSelectDeliveryProfileActivated =
      !this.isSelectDeliveryProfileActivated;
  }

  handleCreatedForm(input: DeliveryInformation) {
    if (input.firstName != null) {
      this.deliveryInformation = input;
    }
  }

  getSelectedForm(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }

  handleForm() {
    this.isFormActivated = !this.isFormActivated;
    this.deliveryInformation = this.user?.deliveryInformation[0];
  }
}
