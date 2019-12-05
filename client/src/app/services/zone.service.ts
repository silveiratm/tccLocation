import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Zone } from '../models/Zone'

const httpOptions = {
  headers: new  HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:3001/api/zone';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  apiUrl = 'http://localhost:3001/api';

  constructor(public http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getAll (): Observable<Zone[]> {
    return this.http.get<Zone[]>(apiUrl)
      .pipe(
        tap(zone => console.log('fetched Locations')),
        catchError(this.handleError('getAll failed', []))
      );
  }

  getOne(id){
    this.http.get(this.apiUrl + '/zone/' + id).pipe(map(res=> {console.log(res)})).subscribe(result => { console.log(result) });
  }

  register (zone): Observable<Zone> {
    return this.http.post<Zone>(apiUrl, zone, httpOptions).pipe(
      tap((zone: Zone) => console.log(`register successfully zone=${zone.name}`)),
      catchError(this.handleError<Zone>('register failed'))
    );
  }
}
