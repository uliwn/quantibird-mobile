import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SurveyResult } from '../models/survey-result.model';

@Injectable()
export class SurveyResultService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = 'https://quantibird.herokuapp.com';
    this.baseUrl = 'http://localhost:3000';
  }

  addResult(result: SurveyResult): Observable<SurveyResult> {
    return this.http.post<SurveyResult>(`${this.baseUrl}/api/result`, result);
  }

}
