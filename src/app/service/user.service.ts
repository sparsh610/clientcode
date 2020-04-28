import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtResponse } from '../model/jwt-response';
import { SignupInfo } from '../model/signup-info';
import { SignInInfo } from '../model/sign-in-info';
let API_URL = "http://localhost:8081/api/user/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {



  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {

  }


  login(user: SignInInfo): Observable<any> {

    return this.http.post<JwtResponse>(API_URL+'login', user, httpOptions);
  }

  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {}).pipe(
      map(response => {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      })
    );
  }

  register(user: SignupInfo): Observable<any> {

    return this.http.post<string>(API_URL + "registration", user, httpOptions);

  }

}
