import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit{
  constructor(private datosUsersService: UsersService, private router:Router ) {}

  users: any; 

  ngOnInit(): void {
    this.datosUsersService.obtenerUsers().subscribe(
      (data)=>this.users=data,
      (error)=>console.log(error),
      ()=>console.log('Users obtenidos')
    )
  }

  crearUser(){
    this.router.navigate(['/detalleUser', -1])
  }
  
  modificarUser(userId: number) { 
    this.router.navigate(['/detalleUser', userId])
  }
  
  eliminarUser(userId: number) {
    return this.datosUsersService.eliminarUser(userId).subscribe(
      (data) =>
      {
        console.log(data);
        location.reload();
      },
      
      (error) => console.log('Error al eliminar el post:', error),
      () => console.log('FIN')
    );
  }

}
