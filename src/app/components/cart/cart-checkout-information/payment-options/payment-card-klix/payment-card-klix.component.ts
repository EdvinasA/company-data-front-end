import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation } from '../../../../../models/user';

@Component({
  selector: 'app-payment-card-klix',
  templateUrl: './payment-card-klix.component.html',
  styleUrls: ['./payment-card-klix.component.scss'],
})
export class PaymentCardKlixComponent implements OnInit {
  @Output() option = new EventEmitter<string>();
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
