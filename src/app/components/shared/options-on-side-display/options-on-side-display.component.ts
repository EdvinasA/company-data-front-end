import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options-on-side-display',
  templateUrl: './options-on-side-display.component.html',
  styleUrls: ['./options-on-side-display.component.scss'],
})
export class OptionsOnSideDisplayComponent implements OnInit {
  @Input() public selectedOption!: string;
  @Input() public options: any[] = [];
  @Output() public newSelectedOption = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeOption(value: string) {
    this.newSelectedOption.emit(value);
  }
}
