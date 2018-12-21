import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class RegisterService {

  baseUrl: string;

  constructor(private http: HttpClient) {
      // this.baseUrl = '';
      this.baseUrl = 'http://quantibird.herokuapp.com';
      // this.baseUrl = 'http://localhost:3000';
  }

  register(user: User): Observable<User> {
      return this.http.post<User>(`${this.baseUrl}/api/user`, user);
  }
  
}
