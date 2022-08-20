import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DeliveryInformation} from "../../../../models/user";
import {DiscountService} from "../../../../services/discount.service";
import {DiscountResponse} from "../../../../models/discount";

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
  public orderInformationPanelOpenState = true;
  public isDiscountApplied = false;
  public discountCode = new FormControl('', [Validators.required]);

  constructor(private discountService: DiscountService) {
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
    // Implement notification to inform user that discount for items of this purchase is already applied.
  }

  updateTotalSum(percent: number) {
    if (percent != null) {
      this.totalSumOfAllItemsSubject = (this.totalSumOfAllItemsSubject * (100 - percent)) / 100;
      this.isDiscountApplied = true;
    }
  }

}
