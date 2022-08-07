import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {Order, OrderInput} from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: ApiGatewayService) { }

  createOrder(input: OrderInput) {
    return this.http.post<OrderInput>(`/order/${input.userId}`, input);
  }

  getOrders(userId: string) {
    return this.http.get<Order>(`/order/${userId}`);
  }
}
