import { Component, Input, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from 'src/app/services/comments-service.service';
import { PostsService } from 'src/app/services/posts-service.service';
import { UsersService } from 'src/app/services/users-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  @Input() userId: any;
  accion: any; 
  constructor(
    private datosPostsService: PostsService,
    private router: Router,
    private datosCommentsService: CommentsService, 
    private datosUsersService: UsersService,
    private datosAuthService: AuthService
  ) {}

  postAuxiliar: any;
  formulario: any;

  ngOnInit(): void {
    if(this.userId != -1) this.accion = 'Actualizar';
    else this.accion = 'Crear cuenta';

    if(this.userId != '-1'){
      this.datosUsersService.obtenerUser(this.userId).subscribe(
        (data) => {
          this.postAuxiliar = data;
          // this.titulo=this.postAuxiliar.titulo
          console.log('Datos del user:', this.postAuxiliar);
          this.formulario = new FormGroup({
            username: new FormControl(this.postAuxiliar.username, Validators.required),
            nombre: new FormControl(this.postAuxiliar.nombre, Validators.required), 
            apellido: new FormControl(this.postAuxiliar.apellido, Validators.required),
            password: new FormControl(this.postAuxiliar.password, Validators.required)
          });
        },
                
        (error) => console.log('Error al obtener un user:', error),
        () => console.log('FIN')
      );
    }

    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required), 
      password: new FormControl('', Validators.required),
      rol: new FormControl('user', Validators.required)
    })
  }
  
  actualizarUsuario() { 
    console.log(this.userId)
    if (this.formulario.valid) {
      if(this.userId != '-1'){
        this.datosUsersService.modificarUser(this.userId, this.formulario.value).subscribe((respuesta: any) => {
          console.log(Response); 
          console.log(respuesta);
          const modifiedUserId = respuesta.id;
          this.router.navigate(['/admin/users'],{ queryParams: { id: modifiedUserId } })
        });
      }else {
        this.datosUsersService.createUser(this.formulario.value).subscribe((respuesta: any) => {
          console.log(Response); 
          console.log(respuesta);
          const nuevoUserId = respuesta.id;
          this.router.navigate(['/admin/users'],{ queryParams: { id: nuevoUserId } })
        });
      }
      
    }
  }

  
}
