import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gender } from '../models/api-models/gender.model';

@Injectable()
export class GenderService {
  private baseApiUrl = 'https://localhost:7069';

  constructor(private httpClient: HttpClient) {}

  getGenderList(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>(this.baseApiUrl + '/genders');
  }
}
