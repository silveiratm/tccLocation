import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:3001/api';

  constructor(public http: HttpClient) { }

  register(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/user', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  login(id){
 
     this.http.get(this.apiUrl + '/user/' + id).pipe(map(res=> {console.log(res)})).subscribe(result => { console.log(result) });
  }

}

