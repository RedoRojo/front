import { Component, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments-service.service';

@Component({
  selector: 'app-comments-for-post',
  templateUrl: './comments-for-post.component.html',
  styleUrls: ['./comments-for-post.component.scss']
})
export class CommentsForPostComponent {

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
  
}

