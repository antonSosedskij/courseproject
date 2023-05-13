import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AccountLoginDto } from '../../interfaces/account-login';
import { AccountCreateDto } from '../../interfaces/account-create';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get token(){
    return localStorage.getItem('token')
  }

  constructor(private http: HttpClient) { }

  signUp(user: AccountCreateDto): Observable<AccountCreateDto> {
    let API_URL = `${environment.apiUrl}Account/register`;
    return this.http.post<AccountCreateDto>(API_URL, user);
  }

  signIn(user: AccountLoginDto): Observable<string> {
    let API_URL = `${environment.apiUrl}Account/login`;
    return this.http.post<string>(API_URL, user);
  }

  isAuthenticated() : boolean{
    return !!this.token
  }
}
