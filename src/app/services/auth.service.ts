import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // Example method for login
  login(credentials: { email: string; password: string }){
    return this.http.post(`/login`, credentials);
  }

  // Example method for registration
  register(userData: any): Observable<any> {
    return this.http.post(`/register`, userData);
  }
}
