import { Component, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'client-mat-spinner',
  templateUrl: './mat-spinner.component.html',
  styleUrls: ['./mat-spinner.component.css']
})
export class MatSpinnerComponent implements OnInit {

showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner=false;  
    },5000);
  }

}
