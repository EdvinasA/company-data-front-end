import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {DeliveryInformation, User} from "../../../models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConverterService} from "../../../services/converter.service";

@Component({
  selector: 'app-display-user-information',
  templateUrl: './display-user-information.component.html',
  styleUrls: ['./display-user-information.component.scss']
})
export class DisplayUserInformationComponent implements OnInit {

  @Input() deliveryInformation!: DeliveryInformation;
  public user!: User | null;
  public isFormActivated: boolean = false;
  public isSelectDeliveryProfileActivated: boolean = false;

  public shippingDeliveryForm = new FormGroup({
    firstName: new FormControl('Edvinas', [Validators.required]),
    lastName: new FormControl('Alimas', [Validators.required]),
    phoneNumber: new FormControl('+37067964887', [Validators.required]),
    address: new FormControl('Geležinio vilko g. 22-29', [Validators.required]),
    city: new FormControl('Kaunas', [Validators.required]),
    postalCode: new FormControl('LT-99696', [Validators.required]),
    companyCode: new FormControl('', ),
    companyName: new FormControl(''),
    companyPVMCode: new FormControl(''),
    companyAddress: new FormControl('')
  });

  public currentAddress!: DeliveryInformation | undefined;

  constructor(private userService: UserService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.currentAddress = this.user?.deliveryInformation[0];
    })
  }

  getShippingDeliveryFormField(input: string) {
    return this.shippingDeliveryForm.get(input);
  }
  submitForm() {
    let info = this.converterService.convertToDeliveryInformation(this.shippingDeliveryForm.value);
    if (this.user?.deliveryInformation != null) {
      this.user?.deliveryInformation.push(info);
    }
    this.updateRequest();
  }

  updateRequest() {
    if (this.user != null) {
      this.userService.updateUser(this.converterService.convertToUpdateUserInput(this.user)).subscribe(user => {
        this.user = user;
      });
    }
  }

  onClickActivateSelectProfileForm() {
    this.isSelectDeliveryProfileActivated = !this.isSelectDeliveryProfileActivated;
  }

}
