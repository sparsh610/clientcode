import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-tabs',
  templateUrl: './material-tabs.component.html',
  styleUrls: ['./material-tabs.component.css']
})
export class MaterialTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logChange(indexNumber){
    console.log(indexNumber);
  }

}
