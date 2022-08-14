import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-options-on-side-display',
  templateUrl: './options-on-side-display.component.html',
  styleUrls: ['./options-on-side-display.component.scss']
})
export class OptionsOnSideDisplayComponent implements OnInit {

  @Input() selectedOption!: string;
  @Input() options: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
