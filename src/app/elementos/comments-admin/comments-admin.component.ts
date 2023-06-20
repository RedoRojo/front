import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments-service.service';

@Component({
  selector: 'app-comments-admin',
  templateUrl: './comments-admin.component.html',
  styleUrls: ['./comments-admin.component.scss']
})
export class CommentsAdminComponent {
  @Input() postId: any; 
  datosRecuperados: any;
  constructor( private datosCommentsService: CommentsService,private router:Router){}
  ngOnInit(): void {

    this.datosCommentsService.obtenerComentariosForPost(this.postId).subscribe(
      (data)=>this.datosRecuperados=data,
      // (data)=>console.log(data),
      (error)=>console.log(error),
      ()=>console.log('FIN')
    )
  }

  eliminarComment(commentId:number){
    return this.datosCommentsService.eliminarCommentSegunId(commentId).subscribe(
      (data) =>
      {
        console.log(data);
        this.datosCommentsService.obtenerComentariosForPost(this.postId).subscribe(
          (data)=>this.datosRecuperados=data,
          (error)=>console.log(error),
          ()=>console.log('FIN')
        )
      },
      
      (error) => console.log('Error al eliminar el comment:', error),
      () => console.log('FIN')
    );
  }
  // verDetalleDeComentario(commentId:number)
  // {
  //   this.router.navigate(['/detalleComment', this.postId,commentId]);
  // }
  
}
