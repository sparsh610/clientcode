import { Component, OnInit } from '@angular/core';
import { HttpClientService ,Employee} from '../service/http-client.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees : any [];

  isEditClicked :Boolean = false;

  constructor(private httpClientService : HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getEmployees().subscribe(
      response =>this.handleResponse(response)
    );
  }
handleResponse(response){
  this.employees = response;
}
deleteEmployee(employee: Employee): void {
  this.httpClientService.deleteEmployee(employee)
    .subscribe( data => {
      this.employees = this.employees.filter(  u => u !==  employee);
      console.log(this.employees);
    })
}
editEmployee(employee: Employee){
  employee.isEditable=true;
}
updateEmployee(employee: Employee){
  employee.isEditable=false;
  this.httpClientService.updateEmployee(employee)
    .subscribe();


}
}
