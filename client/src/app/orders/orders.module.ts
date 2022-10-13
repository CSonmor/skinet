import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    OrdersListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
