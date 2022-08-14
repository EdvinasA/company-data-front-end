import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {DeliveryInformation, User} from "../../../models/user";

@Component({
  selector: 'app-display-user-information',
  templateUrl: './display-user-information.component.html',
  styleUrls: ['./display-user-information.component.scss']
})
export class DisplayUserInformationComponent implements OnInit {

  @Input() deliveryInformation!: DeliveryInformation;
  public isFormActivated: boolean = false;
  public isSelectDeliveryProfileActivated: boolean = false;
  public user!: User | null;

  public currentAddress!: DeliveryInformation | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.currentAddress = this.user?.deliveryInformation[0];
    })
  }

  onClickActivateSelectProfileForm() {
    this.isSelectDeliveryProfileActivated = !this.isSelectDeliveryProfileActivated;
  }

}
