import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-user-information',
  templateUrl: './display-user-information.component.html',
  styleUrls: ['./display-user-information.component.scss']
})
export class DisplayUserInformationComponent implements OnInit {

  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() address: string = '';
  @Input() postalCode: string = '';
  @Input() city: string = '';
  @Input() phoneNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
