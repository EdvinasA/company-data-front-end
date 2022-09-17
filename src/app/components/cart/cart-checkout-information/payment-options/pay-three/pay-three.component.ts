import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation } from '../../../../../models/user';

@Component({
  selector: 'app-pay-three',
  templateUrl: './pay-three.component.html',
  styleUrls: ['./pay-three.component.scss'],
})
export class PayThreeComponent implements OnInit {
  @Input() public totalSum: number = 0;
  @Input() public paymentForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Input() public isDeliveryInformationSelected: boolean = false;
  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();

  constructor() {}

  ngOnInit(): void {}

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
