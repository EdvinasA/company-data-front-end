import {Injectable} from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Discount, DiscountResponse} from "../models/discount";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: ApiGatewayService) {
  }

  checkIfDiscountIsValid(discountCode: string) {
    return this.http.get<DiscountResponse>(`/discount/${discountCode}`)
    .pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  createDiscount(discount: Discount) {
    this.http.post<DiscountResponse>('/discount', discount)
    .pipe(
      catchError((error) => {
        throw error;
      }),
    )
  }
}
