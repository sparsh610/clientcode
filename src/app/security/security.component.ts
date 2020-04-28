import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'client-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent  {

  title = 'Demo';
  greeting = {};
  constructor(private http: HttpClient) {
    http.get('localhost:8081/resource').subscribe(data => this.greeting = data);
  }

}
