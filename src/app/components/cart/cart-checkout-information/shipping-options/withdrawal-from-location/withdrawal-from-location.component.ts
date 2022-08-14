import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal-from-location',
  templateUrl: './withdrawal-from-location.component.html',
  styleUrls: ['./withdrawal-from-location.component.scss']
})
export class WithdrawalFromLocationComponent implements OnInit {

  public selectedOption: string = 'dpd';

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(input: string) {
    this.selectedOption = input;
  }

}
