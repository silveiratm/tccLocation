import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  apiUrl = 'http://localhost:3001/api';

  constructor(public http: HttpClient) { }

  getOne(id){
    this.http.get(this.apiUrl + '/zone/' + id).pipe(map(res=> {console.log(res)})).subscribe(result => { console.log(result) });
  }
}
