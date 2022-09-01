import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  urlSigin = ' http://localhost:3000/signin';

  urlSiginUp = ' http://localhost:3000/signup';

  //post
  signin(user: User): Observable<any> {
    return this.httpClient.post(this.urlSigin, JSON.stringify(user), {
      headers: new HttpHeaders({ 'COntent-type': 'application/json' }),
      observe: 'response',
    });
  }

  //post
  signUp(user: User): Observable<any> {
    return this.httpClient.post(this.urlSiginUp, JSON.stringify(user), {
      headers: new HttpHeaders({ 'COntent-type': 'application/json' }),
      observe: 'response',
    });
  }
}
