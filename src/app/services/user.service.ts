import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  url = ' http://localhost:3000/signin';

  //post
  signin(user: User): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(user), {
      headers: new HttpHeaders({ 'COntent-type': 'application/json' }),
      observe: 'response',
    });
  }
}
