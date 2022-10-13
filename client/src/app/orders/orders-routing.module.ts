import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: ':id', component: OrderComponent, data: {breadcrumb: {alias: 'order'}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
