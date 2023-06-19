import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit{
  datosRecuperados: any;
  userId: number;
  
  constructor( private datosPostsService:PostsService,private router: Router){
    this.userId =2; 
  }
  ngOnInit(): void {
    this.datosPostsService.obtenerPosts().subscribe(
      (data)=>this.datosRecuperados=data,
      (error)=>console.log(error),
      ()=>console.log('FIN')
    )
  }
}
