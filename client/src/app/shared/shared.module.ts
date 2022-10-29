import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { PagerComponent } from './components/pager/pager.component';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    BasketSummaryComponent,
    OrderTotalsComponent,
    PagerComponent,
    PagingHeaderComponent,
    StepperComponent,
    TextInputComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CdkStepperModule,
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    BasketSummaryComponent,
    BsDropdownModule,
    CdkStepperModule,
    CarouselModule,
    FormsModule,
    OrderTotalsComponent,
    PagerComponent,
    PaginationModule,
    PagingHeaderComponent,
    ReactiveFormsModule,
    StepperComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
