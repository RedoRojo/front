import { Component, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments-service.service';

@Component({
  selector: 'app-comments-admin',
  templateUrl: './comments-admin.component.html',
  styleUrls: ['./comments-admin.component.scss']
})
export class CommentsAdminComponent {
  @Input() postId: any; 
  datosRecuperados: any;
  constructor( private datosCommentsService: CommentsService){}
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
        location.reload();
      },
      
      (error) => console.log('Error al eliminar el comment:', error),
      () => console.log('FIN')
    );
  }
  
}
