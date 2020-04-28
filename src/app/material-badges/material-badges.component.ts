import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-badges',
  templateUrl: './material-badges.component.html',
  styleUrls: ['./material-badges.component.css']
})
export class MaterialBadgesComponent implements OnInit {


  matBadgeNumber=0;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    if (this.matBadgeNumber === 10 )
    this.matBadgeNumber = 0;
    else
    this.matBadgeNumber = 10;
  }

  hiddenBadge(){

    return this.matBadgeNumber === 0;
  }


}
