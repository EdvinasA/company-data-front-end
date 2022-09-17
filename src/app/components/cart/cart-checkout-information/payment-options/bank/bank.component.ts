import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeliveryInformation } from '../../../../../models/user';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
})
export class BankComponent implements OnInit {
  @Output() public option = new EventEmitter<string>();
  @Input() public selectedOption: string = '';
  @Input() public paymentWithBankForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Input() public isDeliveryInformationSelected: boolean = false;
  @Output() public selectedDeliveryInformation =
    new EventEmitter<DeliveryInformation>();

  constructor() {}

  ngOnInit(): void {}

  selectOption(input: string) {
    this.selectedOption = input;
    this.option.emit(input);
  }

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
