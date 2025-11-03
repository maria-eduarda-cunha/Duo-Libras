import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  urlMember: string = environment.apiMemberCodespace;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.urlMember + "login/auth", {
      "email": email,
      "password": password,
    }).pipe(take(1));
  }
  
  signin(nome: string | undefined | null,
    email: string | undefined | null,
    password: string | undefined | null) {

    return this.http.post(this.urlMember + "signin", {
      "nome": nome,
      "email": email,
      "password": password,
    }).pipe(take(1));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }
}
