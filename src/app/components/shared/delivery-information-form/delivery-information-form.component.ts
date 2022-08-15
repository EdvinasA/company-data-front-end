import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DeliveryInformation, User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {ConverterService} from "../../../services/converter.service";
import {CartItem} from "../../../models/cart";

@Component({
  selector: 'app-delivery-information-form',
  templateUrl: './delivery-information-form.component.html',
  styleUrls: ['./delivery-information-form.component.scss']
})
export class DeliveryInformationFormComponent implements OnInit {

  @Input() public deliveryInformation!: DeliveryInformation | null;
  @Input() public isFormActivated: boolean = false;
  @Input() public isBeingEdited: boolean = false;
  @Output() public formClosed = new EventEmitter<boolean>();
  @Output() public createdDeliveryInformation = new EventEmitter<DeliveryInformation>()
  public isSelectDeliveryProfileActivated: boolean = false;
  public user!: User | null;

  public shippingDeliveryForm = new FormGroup({
    id: new FormControl('', ),
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
    if (this.deliveryInformation != null) {
      this.shippingDeliveryForm.setValue({
        id: this.deliveryInformation.id,
        firstName: this.deliveryInformation.firstName,
        lastName: this.deliveryInformation.lastName,
        phoneNumber: this.deliveryInformation.phoneNumber,
        address: this.deliveryInformation.address,
        city: this.deliveryInformation.city,
        postalCode: this.deliveryInformation.postalCode,
        companyCode: this.deliveryInformation.companyCode,
        companyName: this.deliveryInformation.companyName,
        companyPVMCode: this.deliveryInformation.companyPVMCode,
        companyAddress: this.deliveryInformation.companyAddress
      })
    }
  }

  getShippingDeliveryFormField(input: string) {
    return this.shippingDeliveryForm.get(input);
  }
  submitForm() {
    let info = this.converterService.convertToDeliveryInformation(this.shippingDeliveryForm.value);
    if (this.user?.deliveryInformation != null && !this.isBeingEdited) {
      this.user?.deliveryInformation.push(info);
    }
    // @ts-ignore
    this.user?.deliveryInformation[this.findIndexToUpdate(info)] = info;
    this.updateRequest();
    this.formClosed.emit(true);
    this.createdDeliveryInformation.emit(info);
    this.onClickCloseAllForms();
  }

  findIndexToUpdate(information: DeliveryInformation) {
    return this.user?.deliveryInformation.findIndex(info => info.id === information.id);
  }

  updateRequest() {
    if (this.user != null) {
      this.userService.updateUser(this.converterService.convertToUpdateUserInput(this.user)).subscribe(user => {
        this.user = user;
      });
    }
  }

  onClickCloseAllForms() {
    this.isFormActivated = false;
    this.isSelectDeliveryProfileActivated = false;
  }
}
