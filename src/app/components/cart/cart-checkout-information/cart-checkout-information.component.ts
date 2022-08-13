import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../models/cart";
import {UserService} from "../../../services/user.service";
import {DeliveryInformation, User} from "../../../models/user";
import {ConverterService} from "../../../services/converter.service";

@Component({
  selector: 'app-cart-checkout-information',
  templateUrl: './cart-checkout-information.component.html',
  styleUrls: ['./cart-checkout-information.component.scss']
})
export class CartCheckoutInformationComponent implements OnInit {

  public selectedAddressForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl(''),
  })
  public shippingDeliveryForm = new FormGroup({
    firstName: new FormControl('Edvinas', [Validators.required]),
    lastName: new FormControl('Alimas', [Validators.required]),
    phoneNumber: new FormControl('+37067964887', [Validators.required]),
    address: new FormControl('Geležinio vilko g. 22-29', [Validators.required]),
    city: new FormControl('Kaunas', [Validators.required]),
    postalCode: new FormControl('LT-99696', [Validators.required])
  });
  public orderInformationPanelOpenState = true;
  public cart!: Cart;
  public totalSumOfAllItemsSubject: number = 0;
  public shippingOptions: string = 'toHome';
  public user: User | null = new User();
  public isLoading: boolean = true;
  public defaultAddressValue: number = 0;
  public selectedTime: number = 1;
  public foundDeliveryInformationByIndex: DeliveryInformation | undefined | null = null;

  constructor(private cartService: CartService,
              private userService: UserService,
              private converterService: ConverterService) {
  }

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe(cart => {
      this.cart = cart;
    })
    this.cartService.currentTotalSum.subscribe(sum => {
      this.totalSumOfAllItemsSubject = sum;
    })
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
      this.selectedAddressForm.setValue({
        address: this.user?.deliveryInformation[this.defaultAddressValue],
        time: 1,
        additionalInformation: ''
      })
      this.isLoading = false;
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
