import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeliveryInformation, User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-withdrawal-from-location',
  templateUrl: './withdrawal-from-location.component.html',
  styleUrls: ['./withdrawal-from-location.component.scss']
})
export class WithdrawalFromLocationComponent implements OnInit {

  @Output() option = new EventEmitter<string>();
  public selectedDeliveryForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    shippingOption: new FormControl('', [Validators.required]),
    additionalInformation: new FormControl('')
  })
  public selectedOption: string = 'dpd';
  public user!: User | null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userSubject.asObservable().subscribe(user => {
      this.user = user;
    })
  }

  selectOption(input: string) {
    this.selectedOption = input;
    this.option.emit(input);
  }

}
