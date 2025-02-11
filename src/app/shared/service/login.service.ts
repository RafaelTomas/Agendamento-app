import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';
import { LoginResponse } from '../types/login.types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        localStorage.setItem("token", value.token)
      })
    )
  }

  signup(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token)
      })
    )
  }
}
