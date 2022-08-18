import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DeliveryInformation} from "../../../../models/user";

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

  constructor() { }

  ngOnInit(): void {
  }

}
