import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { CommentsService } from 'src/app/services/comments-service.service';
import { Location } from '@angular/common';
import { filter, pairwise } from 'rxjs';
@Component({
  selector: 'app-formulario-reactivo-comment',
  templateUrl: './formulario-reactivo-comment.component.html',
  styleUrls: ['./formulario-reactivo-comment.component.scss']
})
export class FormularioReactivoCommentComponent {
  
  @Input() postId: any;
  @Input() pagina: any;
  previousUrl: string=' XD';
  commentAuxiliar: any;
  formulario: any;
  
  constructor(private router: Router,private datosCommentsService: CommentsService,
    private location: Location) {
    
  }

  ngOnInit(): void {
    
    // if(this.pagina!=undefined)
    // {
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
    // }
    // if(this.pagina==undefined)
    // {
    //   const fechaActual: Date = new Date();
    //   const anio: number = fechaActual.getUTCFullYear();
    //   const mes: number = fechaActual.getUTCMonth() + 1; // Los meses comienzan desde 0, se suma 1 para obtener el número correcto
    //   const dia: number = fechaActual.getUTCDate();
    //   const horas: number = fechaActual.getUTCHours();
    //   const minutos: number = fechaActual.getUTCMinutes();
    //   const segundos: number = fechaActual.getUTCSeconds();

    //   const fechaFormateada: string = `${anio}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}T${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}Z`;

    //   console.log(fechaFormateada);
    //   this.formulario = new FormGroup({
      
    //     contenido: new FormControl('', Validators.required),
        
    //   }); 
    // }
      
    
  }
  crearComentario()
  {
    if (this.formulario.valid) {
      
      this.datosCommentsService.crearComment(this.formulario.value).subscribe((respuesta: any) => {
        console.log(respuesta);
        const nuevoPostId = respuesta.post;
        console.log(nuevoPostId)
        if(this.pagina=='1')
        {
          this.router.navigate(['/posts'], { queryParams: { id: nuevoPostId } });
        }
        if(this.pagina=='2')
        {
          this.router.navigate(['/misPosts'], { queryParams: { id: nuevoPostId } });
        }
        // this.router.navigate(['/misPosts'], { queryParams: { id: nuevoPostId } });
        
        
      });
      
  
    }
  }



  // modificarComentario()
  // {
  //   if (this.formulario.valid) {
      
  //     this.datosCommentsService.modificarComment(this.formulario.value,).subscribe((respuesta: any) => {
  //       console.log(respuesta);
  //       const nuevoPostId = respuesta.post;
  //       console.log(nuevoPostId)
        
  //         this.router.navigate(['/admin/posts'], { queryParams: { id: nuevoPostId } });
        
  //       // this.router.navigate(['/misPosts'], { queryParams: { id: nuevoPostId } });
        
        
  //     });
      
  
  //   }
  // }
}
