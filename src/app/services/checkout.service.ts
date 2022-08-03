import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Country} from "../models/country";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(public http: ApiGatewayService) {
  }

  getCountries() {
    return this.http.get<Country[]>(`/shop/countries`);
  }
}
