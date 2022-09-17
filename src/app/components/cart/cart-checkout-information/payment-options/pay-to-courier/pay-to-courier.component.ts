import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation } from '../../../../../models/user';

@Component({
  selector: 'app-pay-to-courier',
  templateUrl: './pay-to-courier.component.html',
  styleUrls: ['./pay-to-courier.component.scss'],
})
export class PayToCourierComponent implements OnInit {
  @Output() public option = new EventEmitter<string>();
  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();
  @Input() public paymentForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Input() public isDeliveryInformationSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
