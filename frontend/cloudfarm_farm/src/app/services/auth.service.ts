import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';

import { BehaviorSubject, Observable } from 'rxjs';
import { first, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/auth';

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

  userId!: Pick<User, 'user_id'>;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService,
    private router: Router
    ) { }

  signup(user: Omit<User, 'user_id'>): Observable<User> {
    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>('signup'))
    );
  }

  login(
    email_address: Pick<User, 'email_address'>, 
    password: Pick<User, 'password'>
  ): Observable<{
    token: string; 
    userId: Pick<User, 'user_id'>;
  }> {
    return this.http
    .post(`${this.url}/login`, { email_address, password }, this.httpOptions)
    .pipe(
      first(),
      tap((tokenObject: any) => {                       // { token: string; userId: Pick<User, 'id'> }
        this.userId = tokenObject.userId;
        localStorage.setItem('token', tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(['hub']);
      }),
      catchError(this.errorHandlerService.handleError<{
        token: string; userId: Pick<User, 'user_id'>
      }>('login'))
    );
  }
}
