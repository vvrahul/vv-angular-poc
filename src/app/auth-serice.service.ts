import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSericeService {
  public isLoggedIn: Boolean;



  constructor(private http: HttpClient) { 
     this.isLoggedIn = (localStorage.getItem('isLoggedIn')==='true');
  }

  public get userLoggedIn(): Boolean {
    return this.isLoggedIn;
}
  // login(data): Observable<any> { //  type commented for demo
    
  //   //return this.http.post('users/login', data);
 
  // }
}
