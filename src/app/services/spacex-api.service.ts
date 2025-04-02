import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Models } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Models[]> {
    return this.http.get<Models[]>(this.apiUrl);
  }
}