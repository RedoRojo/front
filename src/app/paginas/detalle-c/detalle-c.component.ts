import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-c',
  templateUrl: './detalle-c.component.html',
  styleUrls: ['./detalle-c.component.scss']
})
export class DetalleCComponent {
  postId: number=0;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];// Accede al parámetro y asigna su valor a la propiedad de la clase
    });
  }
}
