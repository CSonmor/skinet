import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { IMethod } from 'src/app/shared/models/delivery-method';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.scss']
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm: FormGroup;
  deliveryMethods: IMethod[];

  constructor(private checkoutService: CheckoutService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe((dm: IMethod[]) => {
      this.deliveryMethods = dm;
    }, error => {
      console.log(error);
    });
  }

  setShippingPrice(deliveryMethod: IMethod) {
    this.basketService.setShippingPrice(deliveryMethod);
  }
}
