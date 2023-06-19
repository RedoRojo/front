import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-unique-post',
  templateUrl: './unique-post.component.html',
  styleUrls: ['./unique-post.component.scss']
})
export class UniquePostComponent {
  constructor( private datosPostsService:PostsService,private router: Router){
    
  }
  // postId: number; 
  @Input() userId: any; 
  @Input() posts:any; 
  eliminarPost(postId:number){
    return this.datosPostsService.eliminarPostSegunId(postId).subscribe(
      (data) =>
      {
        console.log(data);
        location.reload();
      },
      
      (error) => console.log('Error al eliminar el post:', error),
      () => console.log('FIN')
    );
    
  }
  verDetalleDePost(postId:number)
  {
    this.router.navigate(['/detallePost', postId,0]);
  }
  verDetalleDeComentario(postId:number)
  {
    this.router.navigate(['/detalleComment', postId]);
  }
}
