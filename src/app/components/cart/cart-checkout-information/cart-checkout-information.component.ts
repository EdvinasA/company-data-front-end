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

  public deliveryToHomeForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl('',)
  });
  public withdrawalAtClientCenterForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    withdrawalLocation: new FormControl('', [Validators.required])
  });
  public withdrawalFromLocationForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    selectedWithdrawalProvider: new FormControl('', [Validators.required]),
    locationOfWithdrawal: new FormControl('', [Validators.required])
  })
  public deliveryOptions = [
    {
      optionName: 'Order to set address',
      description: 'Delivery cost 3,99 €. Deliver in 2 work days.',
      optionValue: 'toHome'
    },
    {
      optionName: 'Withdrawal at client center',
      description: 'Items for withdrawal will prepare in 1 work day.',
      optionValue: 'withdrawal'
    },
    {
      optionName: 'Withdrawal from selected box locations',
      description: 'Items can be withdraw in two days',
      optionValue: 'withdrawalFromLocation'
    }
  ];
  public paymentOptions = [
    {
      optionName: 'Bank',
      description: 'Simply connect to your bank account system and confirm automatically formed payment for the items.',
      optionValue: 'bank'
    },
    {
      optionName: 'Payment card (Klix)',
      description: 'Correct amount will be deducted from the given card. Only confirmation of payment is needed.',
      optionValue: 'klix'
    },
    {
      optionName: 'Pay 3',
      description: 'Fill out documents needed to make payments with Pay 3 in 3 months.',
      optionValue: 'pay3'
    },
    {
      optionName: 'Pay on withdrawal',
      description: 'When you withdraw items from courier you can make payment with credit card if amount does not exceed 1000 Eur.',
      optionValue: 'withdrawalPayment'
    }
  ];
  public orderInformationPanelOpenState = true;
  public cart!: Cart;
  public totalSumOfAllItemsSubject: number = 0;
  public shippingOption: string = 'withdrawalFromLocation';
  public paymentOption: string = 'pay3';
  public pickupOption: string = 'dpd';
  public user: User | null = new User();
  public isLoading: boolean = true;

  constructor(private cartService: CartService,
              private userService: UserService) {
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
      this.isLoading = false;
    })
  }

  deliveryCost() {
    if (this.shippingOption === 'toHome') {
      return 3.99
    }
    if (this.shippingOption === 'withdrawalFromLocation') {
      if (this.pickupOption === 'dpd') {
        return 2.79;
      }
      if (this.pickupOption === 'omniva') {
        return 3.19;
      }
      if (this.pickupOption === 'express') {
        return 2.49;
      }
    }
    return 0;
  }

  updateSelectedPickupOption(option: string) {
    this.pickupOption = option;
  }

  updateSelectedOption(option: string) {
    this.shippingOption = option;
  }

  updateSelectedOptionOfPayment(option: string) {
    this.paymentOption = option;
  }

  getCorrectForm() {
    if (this.shippingOption === 'toHome') {
      return this.deliveryToHomeForm;
    }
    if (this.shippingOption === 'withdrawal') {
      return this.withdrawalAtClientCenterForm;
    }
    if (this.shippingOption === 'withdrawalFromLocation') {
      return this.withdrawalFromLocationForm;
    }
    return null;
  }

}
