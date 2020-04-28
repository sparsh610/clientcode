import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'client-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  matBadgeNumber=0;
  below = "before";
  tooltip = "you have "+ this.matBadgeNumber+ " product in cart";

  hiddenBadge(){
    if(this.matBadgeNumber==0)
    return true;
    else
    return false;
  }
  constructor(private http:HttpClientService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.matBadgeNumber++;
    this.tooltip = "you have "+ this.matBadgeNumber+ " products in cart";
  }

  clearCart(){
    this.matBadgeNumber = 0;
    this.tooltip = "you have "+ this.matBadgeNumber+ " product in cart";

  }

  buyNow(){
    this.http.orderDetailEmitter.next(this.matBadgeNumber);
  }



}
