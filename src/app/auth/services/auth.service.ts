import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from "rxjs";
import { LoginResponse, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user?: User;

  constructor( private http: HttpClient ) { }

  login(email: string, password: string){
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, {email, password})
        .pipe(
          tap( resp => this._user = resp.user),
          tap( resp => {
            localStorage.setItem('token', resp.token);
          })
        );
  }

}
