import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponseData } from '../Pages/Models/AuthResponseData';
import { User } from '../Pages/Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://let-s-play-user-service.onrender.com'
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.url + '/login', { email, password })
  }

  formatUser(data: AuthResponseData) {
    return new User(data.token, data?.email)
  }
}
