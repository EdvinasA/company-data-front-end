import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {ConverterService} from "../../../services/converter.service";

@Component({
  selector: 'app-delivery-information-form',
  templateUrl: './delivery-information-form.component.html',
  styleUrls: ['./delivery-information-form.component.scss']
})
export class DeliveryInformationFormComponent implements OnInit {

  @Input() public isFormActivated: boolean = false;
  public isSelectDeliveryProfileActivated: boolean = false;
  public user!: User | null;

  public shippingDeliveryForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required]),
    companyCode: new FormControl(''),
    companyName: new FormControl(''),
    companyPVMCode: new FormControl(''),
    companyAddress: new FormControl('')
  });

  constructor(private userService: UserService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

  getShippingDeliveryFormField(input: string) {
    return this.shippingDeliveryForm.get(input);
  }
  submitForm() {
    console.log("Activated WTF");
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

  onClickCloseAllForms() {
    console.log("Are you working ?")
    this.isFormActivated = false;
    this.isSelectDeliveryProfileActivated = false;
  }
}
