import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IOrder } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  orderHistory$: Observable<IOrder[]>;

  constructor(private orderService: OrdersService) {
    this.orderHistory$ = this.orderService.getOrders();
  }

  ngOnInit(): void { }
}
