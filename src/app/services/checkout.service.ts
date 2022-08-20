import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(public http: ApiGatewayService) {}

  getCountries() {
    return this.http.get<Country[]>(`/shop/countries`);
  }
}
