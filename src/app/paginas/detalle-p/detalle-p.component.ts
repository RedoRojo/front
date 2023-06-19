import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-detalle-p',
  templateUrl: './detalle-p.component.html',
  styleUrls: ['./detalle-p.component.scss']
})
export class DetallePComponent {
  postId: number=0;
  userId: number=0;
  constructor(private route: ActivatedRoute,private datosPostsService:PostsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];// Accede al parámetro y asigna su valor a la propiedad de la clase
      this.userId=params['idDos']
    });
  }
}
