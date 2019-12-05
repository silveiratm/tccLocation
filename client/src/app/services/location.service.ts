import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Location } from '../models/Location'

const httpOptions = {
  headers: new  HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3001/api/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }


  getAll (): Observable<Location[]> {
    return this.http.get<Location[]>(apiUrl)
      .pipe(
        tap(location => console.log('fetched Locations')),
        catchError(this.handleError('getAll failed', []))
      );
  }

  // getCount(): Observable<Location[]> {
  //   User.countDocuments({ name: 'test' }, function (err, count) {
  //     console.log('there are %d jungle adventures', count);
  //   });
  //   User.distinct('name')
  // }
  

  register (location): Observable<Location> {
    return this.http.post<Location>(apiUrl, location, httpOptions).pipe(
      tap((location: Location) => console.log(`register successfully id=${location._id}`)),
      catchError(this.handleError<Location>('register failed'))
    );
  }


}

