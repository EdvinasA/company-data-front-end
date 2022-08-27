import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../models/order';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  public orders!: Order[] | null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.orderSubject.asObservable().subscribe((orders) => {
      this.orders = orders;
    });
  }
}
