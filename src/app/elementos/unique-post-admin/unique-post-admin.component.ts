import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-unique-post-admin',
  templateUrl: './unique-post-admin.component.html',
  styleUrls: ['./unique-post-admin.component.scss']
})
export class UniquePostAdminComponent {
  constructor( private datosPostsService:PostsService,private router: Router){
    
  }

  @Input() posts:any; 
  eliminarPost(postId:number){
    return this.datosPostsService.eliminarPostSegunId(postId).subscribe(
      (data) =>
      {
        console.log(data);
        this.datosPostsService.obtenerPosts().subscribe(
          (data)=>this.posts=data,
          (error)=>console.log(error),
          ()=>console.log('FIN')
        )
      },
      
      (error) => console.log('Error al eliminar el post:', error),
      () => console.log('FIN')
    );
    
  }

}
