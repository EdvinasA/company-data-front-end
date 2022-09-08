import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../../../models/country';
import { CheckoutService } from '../../../../services/checkout.service';

@Component({
  selector: 'app-checkout-credit-cart',
  templateUrl: './checkout-credit-cart.component.html',
  styleUrls: ['./checkout-credit-cart.component.scss'],
})
export class CheckoutCreditCartComponent implements OnInit {
  public listOfYears: number[] = [
    2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
    2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045,
    2046, 2047, 2048, 2049, 2050,
  ];
  public listOfMonths: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  public countries: Country[] = [];
  public checkoutCreditCardForm = new FormGroup({
    cardNumber: new FormControl('', Validators.required),
    expirationYear: new FormControl('', Validators.required),
    expirationMonth: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required),
    country: new FormControl('Lithuania', Validators.required),
  });

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.checkoutCreditCardForm.value);
  }
}
