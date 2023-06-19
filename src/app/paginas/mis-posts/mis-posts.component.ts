import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.scss']
})
export class MisPostsComponent {
  
  postsPersonales: any;
  userId: number;
  
  constructor( private datosPostsService:PostsService,private router: Router){
    this.userId =2; 
  }
  ngOnInit(): void {
    
    this.datosPostsService.obtenerPostsForUser(this.userId).subscribe(
      (data)=>this.postsPersonales=data,
      // (data)=>console.log(data),
      (error)=>console.log(error),
      ()=>console.log('FIN')

    )
  }
  crearPost()
  {
    this.router.navigate(['/detallePost', 0,this.userId]);
  }
  
}
