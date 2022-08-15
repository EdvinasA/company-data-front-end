import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../models/user";
import {UserService} from "../../../../../services/user.service";

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

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
