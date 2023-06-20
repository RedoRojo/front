import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  datosRecuperados: any;
  userId: number;
  lastPId:any;
  
  constructor( private datosPostsService:PostsService,private router: Router,private route2: ActivatedRoute){
    this.userId =2; 
  }
  ngOnInit(): void {
    this.datosPostsService.obtenerPosts().subscribe(
      (data)=>this.datosRecuperados=data,
      (error)=>console.log(error),
      ()=>console.log('FIN')
    )
    this.route2.queryParams.subscribe(params => {
      const lastPublicationId = params['id'];
      console.log(lastPublicationId)
      
      if (lastPublicationId) {
        this.lastPId=lastPublicationId;
        // this.lastPId=91;
      }
    });
  }
}
