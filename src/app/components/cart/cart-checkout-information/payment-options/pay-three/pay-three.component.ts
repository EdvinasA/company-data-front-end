import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DeliveryInformation, User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-pay-three',
  templateUrl: './pay-three.component.html',
  styleUrls: ['./pay-three.component.scss']
})
export class PayThreeComponent implements OnInit {

  @Input() totalSum: number = 0;
  @Input() public paymentForm!: FormGroup;
  @Input() public defaultDeliveryInformation!: DeliveryInformation;
  @Output() public selectedDeliveryInformation = new EventEmitter<DeliveryInformation>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedDeliveryInformation(input: DeliveryInformation) {
    this.selectedDeliveryInformation.emit(input);
  }
}
