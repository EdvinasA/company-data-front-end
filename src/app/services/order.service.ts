import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { CartItem } from '../models/cart';
import { Order, OrderInput } from '../models/order';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private cachedOrders!: Order[];
  public orderSubject: Subject<Order[] | null> = new ReplaySubject<
    Order[] | null
  >();

  constructor(private http: ApiGatewayService) {}

  createOrder(input: OrderInput, userId: string | undefined) {
    return this.http.post<CartItem[]>(`/orders/${userId}`, input);
  }

  getOrder(orderId: string | null) {
    return this.http.get<Order>(`/orders/order/${orderId}`);
  }

  getOrders(userId: string | undefined): Subscription {
    return this.http
      .get<Order[]>(`/orders/${userId}`)
      .pipe(
        catchError((err) => {
          throw err;
        }),
        finalize(() => {
          this.orderSubject.next(this.cachedOrders);
        })
      )
      .subscribe((response) => {
        this.cachedOrders = response;
      });
  }
}
