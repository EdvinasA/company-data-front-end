import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  color: ThemePalette = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
