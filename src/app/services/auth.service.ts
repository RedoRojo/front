import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { UsersService } from './users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'secreta';
  constructor(
    private http: HttpClient, 
    private router: Router,
    private datosUserService: UsersService  
  ) { }

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

  public getUserId(): number {
    let token = this.getToken(); 
    let id = this.decodeToken(token as String).sub
    return id; 
  }

  decodeToken(token: any): any {
    return jwtDecode(token)
  }

  public async isAdmin(): Promise<Boolean> {
    let response = true; 
    let logged = this.isLoggedIn(); 
    if(logged === false) {
      response = logged; 
      return response; 
    }
    let id = this.getUserId(); 
    const data:any = await this.datosUserService.obtenerUser(id).toPromise();
    console.log(data)
    console.log(data.rol)
    response = (data.rol === 'admin')
    console.log("this is the response outside the scope",response);
    return response; 
  }
}
