import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments-service.service';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-formulario-reactivo-post',
  templateUrl: './formulario-reactivo-post.component.html',
  styleUrls: ['./formulario-reactivo-post.component.scss']
})
export class FormularioReactivoPostComponent {
  @Input() postId: any;
  @Input() userId: any;
  postAuxiliar: any;
  formulario: any;
  aniadirComentario:boolean=false;
  constructor(private datosPostsService: PostsService, private router: Router,private datosCommentsService: CommentsService) {}

  ngOnInit(): void {
    console.log(this.postId);
    console.log(this.userId);
    if(this.postId!=0 && this.userId==0)
    {
      this.datosPostsService.obtenerPostSegunId(this.postId).subscribe(
        (data) => {
          this.postAuxiliar = data;
          // this.titulo=this.postAuxiliar.titulo
          console.log('Datos del post:', this.postAuxiliar);
          this.formulario = new FormGroup({
            
            titulo: new FormControl(this.postAuxiliar.titulo, Validators.required),
            contenido: new FormControl(this.postAuxiliar.contenido, Validators.required)
          });
        },
        (error) => console.log('Error al obtener un post:', error),
        () => console.log('FIN')
      );  
      this.formulario = new FormGroup({
      
        titulo: new FormControl('', Validators.required),
        contenido: new FormControl( '', Validators.required)
      });
    }
    if(this.postId==0 && this.userId!=0)
    {
      
      const fechaActual: Date = new Date();
      const anio: number = fechaActual.getUTCFullYear();
      const mes: number = fechaActual.getUTCMonth() + 1; // Los meses comienzan desde 0, se suma 1 para obtener el número correcto
      const dia: number = fechaActual.getUTCDate();
      const horas: number = fechaActual.getUTCHours();
      const minutos: number = fechaActual.getUTCMinutes();
      const segundos: number = fechaActual.getUTCSeconds();

      const fechaFormateada: string = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}T${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}Z`;

      console.log(fechaFormateada);
      this.formulario = new FormGroup({
      
        titulo: new FormControl('', Validators.required),
        contenido: new FormControl('', Validators.required),
        user: new FormControl(this.userId),
        fecha: new FormControl(fechaFormateada)
      });
    }
    if(this.postId !== 0 && this.userId === undefined)
    {
      
      const fechaActual: Date = new Date();
      const anio: number = fechaActual.getUTCFullYear();
      const mes: number = fechaActual.getUTCMonth() + 1; // Los meses comienzan desde 0, se suma 1 para obtener el número correcto
      const dia: number = fechaActual.getUTCDate();
      const horas: number = fechaActual.getUTCHours();
      const minutos: number = fechaActual.getUTCMinutes();
      const segundos: number = fechaActual.getUTCSeconds();

      const fechaFormateada: string = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}T${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}Z`;

      console.log(fechaFormateada);
      this.formulario = new FormGroup({
      
        contenido: new FormControl('', Validators.required),
        post: new FormControl(this.postId),
        fecha: new FormControl(fechaFormateada),
        likes: new FormControl(0),
        dislikes: new FormControl(0)
      });
    }
  }
  inicializarFormulario()
  {
    this.formulario = new FormGroup({
      fecha: new FormControl(''),
      titulo: new FormControl('', Validators.required),
      contenido: new FormControl( '', Validators.required)

    });
  }
  modificar() {
    if (this.formulario.valid) {
      
      this.datosPostsService.modificarPost(this.postId,this.formulario.value).subscribe((respuesta: any) => {
        console.log(respuesta);
        this.router.navigate(['/misPosts']);
      });
      
      
      
    }
  }
  crear()
  {
    if (this.formulario.valid) {
      
      this.datosPostsService.crearPost(this.formulario.value).subscribe((respuesta: any) => {
        console.log(respuesta);
        this.router.navigate(['/misPosts']);
      });
      
  
    }
  }
  crearComentario()
  {
    if (this.formulario.valid) {
      
      this.datosCommentsService.crearComment(this.formulario.value).subscribe((respuesta: any) => {
        console.log(respuesta);
        // this.router.navigate(['/posts']);
        window.history.back();
      });
      
  
    }
  }
}



