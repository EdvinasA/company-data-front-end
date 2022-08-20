import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DeliveryInformation} from "../../../../models/user";
import {DiscountService} from "../../../../services/discount.service";
import {NotificationService} from "../../../../services/notification.service";

@Component({
  selector: 'app-order-information-display',
  templateUrl: './order-information-display.component.html',
  styleUrls: ['./order-information-display.component.scss']
})
export class OrderInformationDisplayComponent implements OnInit {

  @Input() public deliveryToHomeForm!: FormGroup;
  @Input() public withdrawalAtClientCenterForm!: FormGroup;
  @Input() public withdrawalFromLocationForm!: FormGroup;
  @Input() public deliveryInformation!: DeliveryInformation;
  @Input() public totalSumOfAllItemsSubject: number = 0;
  @Input() public deliveryCost: number = 0;
  @Input() public shippingOption: string = '';
  @Input() public amountOfItems: number = 0;
  @Input() public currentStep: number = 0;
  @Input() public isDiscountApplied = false;
  @Output() public totalSumWithDiscount = new EventEmitter<number>();
  @Output() public discountAppliedEvent = new EventEmitter<boolean>();
  public orderInformationPanelOpenState = true;
  public discountCode = new FormControl('', [Validators.required]);

  constructor(private discountService: DiscountService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  checkDiscountCode(input: string) {
    if (!this.isDiscountApplied) {
      this.discountCode.reset();
      this.discountService.checkIfDiscountIsValid(input).subscribe(response => {
        this.updateTotalSum(response.percent)
      });
    }
    if (this.isDiscountApplied) {
      this.notificationService.informationalMessage('Discount for this order is already applied.', '');
    }
  }

  updateTotalSum(percent: number) {
    if (percent != null) {
      this.totalSumOfAllItemsSubject = (this.totalSumOfAllItemsSubject * (100 - percent)) / 100;
      this.isDiscountApplied = true;
      this.discountAppliedEvent.emit(this.isDiscountApplied);
      this.totalSumWithDiscount.emit(this.totalSumOfAllItemsSubject);
      this.notificationService.informationalMessage('Discount was applied', '');
      return;
    }
    this.notificationService.informationalMessage('Not existing or expired discount code was used.', '');
  }

}
