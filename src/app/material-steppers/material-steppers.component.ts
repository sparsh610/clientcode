import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-steppers',
  templateUrl: './material-steppers.component.html',
  styleUrls: ['./material-steppers.component.css']
})
export class MaterialSteppersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  billingAddressFlag=false;
  changeFlag(){
this.billingAddressFlag=true;
  }

}
