import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

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


  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
  
  public getUsername(): string {
    let token = this.getToken();
    let name = (this.decodeToken(token as String)).username

    return name;
  }

  decodeToken(token: any): any {
    return jwtDecode(token)
  }
}
