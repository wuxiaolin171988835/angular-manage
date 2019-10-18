import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/users/';

  constructor(private http: HttpClient) {}
  login(user) {
    return this.http.post(`${this.url}login`, user);
  }
}
