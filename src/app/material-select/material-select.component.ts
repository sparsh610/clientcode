import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-select',
  templateUrl: './material-select.component.html',
  styleUrls: ['./material-select.component.css']
})
export class MaterialSelectComponent implements OnInit {


  selectedValue:any;
  selectedValue1 : any;
  constructor() { }

  ngOnInit(): void {
  }

}
