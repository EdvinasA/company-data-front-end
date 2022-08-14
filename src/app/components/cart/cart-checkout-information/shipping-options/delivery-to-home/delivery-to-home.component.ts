import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../services/user.service";
import {User} from "../../../../../models/user";
import {ConverterService} from "../../../../../services/converter.service";

@Component({
  selector: 'app-delivery-to-home',
  templateUrl: './delivery-to-home.component.html',
  styleUrls: ['./delivery-to-home.component.scss']
})
export class DeliveryToHomeComponent implements OnInit {

  public selectedAddressForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl('asdasdasd'),
  })
  public shippingDeliveryForm = new FormGroup({
    firstName: new FormControl('Edvinas', [Validators.required]),
    lastName: new FormControl('Alimas', [Validators.required]),
    phoneNumber: new FormControl('+37067964887', [Validators.required]),
    address: new FormControl('Geležinio vilko g. 22-29', [Validators.required]),
    city: new FormControl('Kaunas', [Validators.required]),
    postalCode: new FormControl('LT-99696', [Validators.required])
  });
  public user: User | null = new User();
  public defaultAddressValue: number = 0;

  constructor(private userService: UserService,
              private converterService: ConverterService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.selectedAddressForm.setValue({
        address: this.user?.deliveryInformation[this.defaultAddressValue],
        time: '1',
        additionalInformation: 'asdasdas'
      })
    })
  }

  getShippingDeliveryFormField(input: string) {
    return this.shippingDeliveryForm.get(input);
  }

  getSelectedAddressFormField(input: string) {
    return this.selectedAddressForm.get(input);
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
}
