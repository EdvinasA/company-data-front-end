import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart';
import { Order } from '../models/order';
import { ApiGatewayService } from './api-gateway.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: ApiGatewayService) {}

  createOrder(input: CartItem[], userId: string | undefined) {
    return this.http.post<CartItem[]>(`/order/${userId}`, input);
  }

  getOrders(userId: string) {
    return this.http.get<Order>(`/order/${userId}`);
  }
}
