import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Survey } from '../models/survey.model';

@Injectable()
export class SurveyService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = '';
    this.baseUrl = 'http://quantibird.herokuapp.com';
    // this.baseUrl = 'http://localhost:3000';
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>(`${this.baseUrl}/api/surveys/active`);
  }

}
