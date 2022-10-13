import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';

import { IOrder } from '../../shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  order: IOrder;
  orderSub: Subscription;

  constructor(
    private orderService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private bcService: BreadcrumbService
  ) {
    this.bcService.set('@order', '');
  }

  ngOnInit(): void {
    this.orderSub = this.orderService.getOrderDetails(
      +this.activatedRoute.snapshot.paramMap.get('id')
    ).subscribe((order: IOrder) => {
      this.order = order;
      this.bcService.set('@order', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    if (this.orderSub) {
      this.orderSub.unsubscribe();
    }
  }
}
