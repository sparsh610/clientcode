import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
    public isEditable : boolean
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
 readonly orderDetailEmitter = new ReplaySubject<number>(1);


  constructor(
    private httpClient:HttpClient
  ) {

     }

     getEmployees()
  {

    return this.httpClient.get<Employee[]>('http://localhost:8081/fetchEmployees');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8081/deleteEmployee" + "/"+ employee.emailid);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8081/employees", employee);
  }

  public updateEmployee(employee){
    return this.httpClient.post<Employee>("http://localhost:8081/updateEmployee", employee);
  }

  public createUser(user){
    return this.httpClient.post("http://localhost:8081/registration",user);
  }


}
