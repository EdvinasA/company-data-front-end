import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../models/order';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  public order!: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}
}
