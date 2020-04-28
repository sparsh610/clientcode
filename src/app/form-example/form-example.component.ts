import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'client-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  constructor(private http:HttpClientService) { }

  ngOnInit(): void {
  }
  onClickSubmit(employeedetails:any){
    console.log(employeedetails);
    this.http.createEmployee(employeedetails).subscribe((response)=>{
      console.log(response);
    });
  }

}
