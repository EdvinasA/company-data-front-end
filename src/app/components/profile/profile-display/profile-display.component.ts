import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {DeliveryInformation, User} from "../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConverterService} from "../../../services/converter.service";

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit {

  public user!: User | null;
  public isLoading: boolean = true;
  public isFormActivated: boolean = false;

  public deliveryInformationForm = new FormGroup({
    firstName: new FormControl('Edvinas', [Validators.required]),
    lastName: new FormControl('Alimas', [Validators.required]),
    phoneNumber: new FormControl('+37067964887', [Validators.required]),
    address: new FormControl('Geležinio vilko g. 22-29', [Validators.required]),
    city: new FormControl('Kaunas', [Validators.required]),
    postalCode: new FormControl('LT-99696', [Validators.required]),
    companyCode: new FormControl(''),
    companyName: new FormControl(''),
    companyPVMCode: new FormControl(''),
    companyAddress: new FormControl('')
  });

  constructor(private userService: UserService,
              private converterService: ConverterService) {
  }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.isLoading = false;
    })
  }

  deleteDeliveryInformation(information: DeliveryInformation) {
    let index = this.user?.deliveryInformation.findIndex(info => info.id === information.id);
    if (this.user != null && index != null) {
      this.user.deliveryInformation.splice(index, 1)
      this.userService.updateUser(this.converterService.convertToUpdateUserInput(this.user)).subscribe();
    }
  }

}
