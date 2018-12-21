import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = '';
    this.baseUrl = 'http://quantibird.herokuapp.com';
    //this.baseUrl = 'http://localhost:3000';
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/login`, credentials);
  }

}
