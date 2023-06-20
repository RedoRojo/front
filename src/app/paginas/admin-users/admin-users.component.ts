import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit{
  constructor(private datosUsersService: UsersService, private router:Router,private route2: ActivatedRoute) {}
  lastUId:any;
  users: any; 
  highlightedUserId:any;
  ngOnInit(): void {
    this.datosUsersService.obtenerUsers().subscribe(
      (data)=>this.users=data,
      (error)=>console.log(error),
      ()=>console.log('Users obtenidos')
    )
    this.route2.queryParams.subscribe(params => {
      const lastUserId = params['id'];
      console.log(lastUserId)
      
      if (lastUserId) {
        this.lastUId=lastUserId;
        
      }
    });
    if(this.lastUId===undefined)
    {
      console.log("No existe un ultimo usuario creado ")

    }
    else{
      
      
      setTimeout(() => {
        console.log("el ultimo usuario creado es "+this.lastUId)
        console.log("y su tipo es "+typeof this.lastUId)
        this.highlightedUserId = this.lastUId;
        const element = document.querySelector('#u'+this.lastUId);
        if (element) {
          console.log('entrooo')
          element.scrollIntoView({ block:'center'});
          
          //this.lastPost.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        else{
          console.log('no entroo')
        }
      }); 
      // El uso de setTimeout en este caso tiene un propó
      // sito específico: dar tiempo a Angular para que renderice completamente lo
      // s elementos en el DOM antes de ejecutar el código que realiza la selección y el desplazamiento del elemento.
      // Cuando se realiza la asignación de valores en Angular, el proceso de renderizado 
      // puede tomar un tiempo dependiendo de la complejidad de la vista y de otros factores. 
      // Si intentas seleccionar un elemento inmediatamente después de asignar los valores, 
      // es posible que el elemento aún no exista en el DOM y, por lo tanto, no se pueda seleccionar correctamente.
    }
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
        this.datosUsersService.obtenerUsers().subscribe(
          (data)=>this.users=data,
          (error)=>console.log(error),
          ()=>console.log('Users obtenidos')
        )
        // location.reload();
      },
      
      (error) => console.log('Error al eliminar el post:', error),
      () => console.log('FIN')
    );
  }

}
