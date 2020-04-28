import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-sidenav',
  templateUrl: './material-sidenav.component.html',
  styleUrls: ['./material-sidenav.component.css']
})
export class MaterialSidenavComponent implements OnInit {
  opened = false; 
  constructor() { }

  ngOnInit(): void {
  }

}
