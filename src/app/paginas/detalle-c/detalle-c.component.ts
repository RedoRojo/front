import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-c',
  templateUrl: './detalle-c.component.html',
  styleUrls: ['./detalle-c.component.scss']
})
export class DetalleCComponent {
  postId: number=0;
  pagina:number=0;
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];// Accede al parámetro y asigna su valor a la propiedad de la clase
      this.pagina=params['idDos'];
    });
  }
  volverAtras()
  {
    if(this.pagina==1)
    {
      this.router.navigate(['/posts']);
    }
    if(this.pagina==2)
    {
      this.router.navigate(['/misPosts']);
    }
  }
}
