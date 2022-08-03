import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../../services/checkout.service";
import {Country} from "../../../models/country";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  countries: Country[] = [];
  selectCountry: string = "Lithuania";

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getCountries().subscribe(data => {
      this.countries = data;
    })
  }

}
