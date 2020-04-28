import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';



@Component({
  selector: 'client-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  productNumber;
  constructor(private http : HttpClientService) {
    this.productNumber=this.http.orderDetailEmitter;
   }

  ngOnInit(): void {

  }

}
