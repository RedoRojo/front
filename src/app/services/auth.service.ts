import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'secreta';
  constructor(private http: HttpClient, private router: Router) { }

  login(formulario: any) {
    let response = this.http.post('http://localhost:3000/auth/login', formulario);
    return response; 
  }


  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

}
