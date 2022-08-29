import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Cart } from '../../../models/cart';
import { OrderInput } from '../../../models/order';
import { DeliveryInformation, User } from '../../../models/user';
import { CartService } from '../../../services/cart.service';
import { OrderService } from '../../../services/order.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-cart-checkout-information',
  templateUrl: './cart-checkout-information.component.html',
  styleUrls: ['./cart-checkout-information.component.scss'],
})
export class CartCheckoutInformationComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  public deliveryToHomeForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl(''),
  });
  public withdrawalAtClientCenterForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    withdrawalLocation: new FormControl('', [Validators.required]),
  });
  public withdrawalFromLocationForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    selectedWithdrawalProvider: new FormControl('', [Validators.required]),
    locationOfWithdrawal: new FormControl('', [Validators.required]),
  });
  public paymentWithBankForm = new FormGroup({
    bank: new FormControl('', [Validators.required]),
    selectedPayment: new FormControl('', [Validators.required]),
  });
  public paymentForm = new FormGroup({
    selectedPayment: new FormControl('', [Validators.required]),
  });
  public deliveryOptions = [
    {
      optionName: 'Order to set address',
      description: 'Delivery cost 3,99 €. Deliver in 2 work days.',
      optionValue: 'TO_HOME',
    },
    {
      optionName: 'Withdrawal at client center',
      description: 'Items for withdrawal will be prepared in 1 work day.',
      optionValue: 'WITHDRAWAL',
    },
    {
      optionName: 'Withdrawal from selected box locations',
      description: 'Items can be withdraw in two days',
      optionValue: 'WITHDRAWAL_FROM_LOCATION',
    },
  ];
  public paymentOptions = [
    {
      optionName: 'Bank',
      description:
        'Simply connect to your bank account system and confirm automatically formed payment for the items.',
      optionValue: 'BANK',
    },
    {
      optionName: 'Payment card (Klix)',
      description:
        'Correct amount will be deducted from the given card. Only confirmation of payment is needed.',
      optionValue: 'PAYMENT_CARD_KLIX',
    },
    {
      optionName: 'Pay 3',
      description:
        'Fill out documents needed to make payments with Pay 3 in 3 months.',
      optionValue: 'PAY_3',
    },
    {
      optionName: 'Pay on withdrawal',
      description:
        'When you withdraw items from courier you can make payment with credit card if amount does not exceed 1000 Eur.',
      optionValue: 'WITHDRAWAL_PAYMENT',
    },
  ];
  public isDiscountApplied: boolean = false;
  public cart!: Cart;
  public selectedDeliveryInformation!: DeliveryInformation;
  public totalSumOfAllItemsSubject: number = 0;
  public shippingOption: string = 'TO_HOME';
  public paymentOption: string = 'BANK';
  public pickupOption: string = 'dpd';
  public user!: User | null;
  public isLoading: boolean = true;

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartService.currentCartList.subscribe((cart) => {
      this.cart = cart;
    });
    this.cartService.currentTotalSum.subscribe((sum) => {
      this.totalSumOfAllItemsSubject = sum;
    });
    this.userService.userSubject.asObservable().subscribe((user) => {
      this.user = user;
      if (this.user != null) {
        this.selectedDeliveryInformation = this.user?.deliveryInformation[0];
      }
      this.isLoading = false;
    });
    this.getPaymentForm().patchValue({
      selectedPayment: this.paymentOption,
    });
    if (this.user != undefined) {
      this.deliveryToHomeForm.patchValue({
        address: this.user.deliveryInformation[0],
        time: '1',
        shippingOption: 'toHome',
      });
      this.withdrawalFromLocationForm.patchValue({
        address: this.user.deliveryInformation[0],
        selectedWithdrawalProvider: 'dpd',
      });
      this.withdrawalAtClientCenterForm.patchValue({
        address: this.user.deliveryInformation[0],
      });
    }
  }

  deliveryCost() {
    if (this.shippingOption === 'TO_HOME') {
      return 3.99;
    }
    if (this.shippingOption === 'WITHDRAWAL_FROM_LOCATION') {
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

  getDeliveryForm() {
    this.updateForm();
    if (this.shippingOption === 'TO_HOME') {
      return this.deliveryToHomeForm;
    }
    if (this.shippingOption === 'WITHDRAWAL') {
      return this.withdrawalAtClientCenterForm;
    }
    if (this.shippingOption === 'WITHDRAWAL_FROM_LOCATION') {
      return this.withdrawalFromLocationForm;
    }
    return null;
  }

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation = input;
  }

  getPaymentForm() {
    if (this.paymentOption === 'BANK') {
      return this.paymentWithBankForm;
    }
    return this.paymentForm;
  }

  updateForm() {
    this.getPaymentForm().patchValue({
      selectedPayment: this.paymentOption,
    });
  }

  updatePaymentWithBankForm(input: string) {
    this.paymentWithBankForm.patchValue({
      bank: input,
    });
  }

  getStepperIndex() {
    if (this.stepper != undefined) {
      return this.stepper.selectedIndex;
    }
    return null;
  }

  updateTotalSumWithDiscount(sum: number) {
    this.totalSumOfAllItemsSubject = sum;
  }

  handleDiscount(change: boolean) {
    this.isDiscountApplied = change;
  }

  submitOrderHandler() {
    let order: OrderInput = {
      userId: this.user!.id,
      deliveryAddress: 'Geležinio Vilko g. 22-29 49272 Kaunas',
      withdrawalLocation: '',
      wantedDeliveryTime: '08:00–18:00',
      deliveryOption: 'TO_HOME',
      paymentMethod: 'BANK_SWEDBANK',
      totalPrice: this.totalSumOfAllItemsSubject,
      appliedDiscountAmount: 10,
      deliveryPrice: this.deliveryCost(),
      orderedItems: this.cart.cartItems,
    };

    this.orderService.createOrder(order, this.user?.id).subscribe();
  }
}
