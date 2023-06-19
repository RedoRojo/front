import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  obtenerUser(userId: number) {
    return this.http.get("http://localhost:3000/users/" + userId.toString())
  }

  obtenerUsers(){
    return this.http.get('http://localhost:3000/users')
  }
  modificarUser(userId:number,formulario:any)
  {
    return this.http.put('http://localhost:3000/users/'+userId.toString(),formulario)
  }

  createUser(formulario:any){
    return this.http.post('http://localhost:3000/users', formulario)
  }

  eliminarUser(userId:number) 
  {
    return this.http.delete('http://localhost:3000/users/' + userId.toString())
  }
}
