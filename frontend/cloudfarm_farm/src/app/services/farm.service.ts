import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Farm } from '../models/Farm';
import { Sensors } from '../models/Sensors';
import { Valves } from '../models/Valves';
import { ErrorHandlerService } from './error-handler.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private url = 'http://localhost:3400';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  fetchAll(): Observable<Farm[]> {
    return this.http.get<Farm[]>(this.url, { responseType: 'json' }).pipe(
      catchError(this.errorHandlerService.handleError<Farm[]>('fetchAll', []))
    );
  }

  fetchFarm(): Observable<Sensors> {
    return this.http.get<Sensors>(`${this.url}/farm_get`, { responseType: 'json' })
    .pipe(
      tap(data => 'All: ' + JSON.stringify(data)),
      catchError(this.errorHandlerService.handleError<Sensors>('fetchFarm'))
    );
  }

  setFarm(
    formData: Partial<Valves>
    ): Observable<Valves> {
      return this.http.post<Valves>(`${this.url}/farm_set`, {
        water_percent: formData.water_percent,
        water_toggle: formData.water_toggle,
        light_toggle: formData.light_toggle
      },
      this.httpOptions
      ).pipe(
        catchError(this.errorHandlerService.handleError<Valves>('setFarm'))
      );
  }

  createFarm(
    formData: Partial<Farm>, 
    userId: Pick<User, 'user_id'>
    ): Observable<Farm> {
    return this.http.post<Farm>(
      this.url, 
      {
      name: formData.name,
      ip: formData.ip,
      physical_address: formData.physical_address,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      farm_status: formData.farm_status,
      user_id: userId
    },
    this.httpOptions
    ).pipe(
      catchError(this.errorHandlerService.handleError<Farm>('createFarm'))
    );
  }

  deleteFarm(farmId: Pick<Farm, 'farm_id'>): Observable<{}> {
    return this.http.delete<Farm>(`${this.url}/${farmId}`, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Farm>("deleteFarm"))
    );
  }
}
