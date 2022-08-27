import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../../models/order';
import { OrderService } from '../../../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  public order!: Order | undefined;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.orderService
      .getOrder(this.route.snapshot.paramMap.get('id'))
      .subscribe((order) => {
        this.order = order;
      });
  }
}
