import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-on-side-display',
  templateUrl: './options-on-side-display.component.html',
  styleUrls: ['./options-on-side-display.component.scss'],
})
export class OptionsOnSideDisplayComponent implements OnInit {
  @Input() selectedOption!: string;
  @Input() options: any[] = [];
  @Output() newSelectedOption = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeOption(value: string) {
    this.newSelectedOption.emit(value);
  }
}
