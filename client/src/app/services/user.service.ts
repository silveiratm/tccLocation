import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/User'

const httpOptions = {
  headers: new  HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3001/api/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched users')),
        catchError(this.handleError('getUsers failed', []))
      );
  }
  

  register (user): Observable<User> {
    return this.http.post<User>(apiUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`register successfully registration=${user.registration}`)),
      catchError(this.handleError<User>('register failed'))
    );
  }

  login(user): Observable<any>{
    
    return this.http.post<User>(apiUrl + '/login', user, httpOptions).pipe(
      tap((user: User) => console.log(`login successfully registration=${user.registration}`)),
      catchError(this.handleError<User>('login failed'))
    );
  }

}

