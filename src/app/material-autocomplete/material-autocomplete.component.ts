import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-material-autocomplete',
  templateUrl: './material-autocomplete.component.html',
  styleUrls: ['./material-autocomplete.component.css']
})
export class MaterialAutocompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options : string[] = ['Angular', 'Vue', 'React'];

}
