import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-mis-posts',
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.scss']
})
export class MisPostsComponent {
  scrollPosition: number = 0;
  postsPersonales: any;
  userId: number;
  lastPId:any;


  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.scrollPosition = window.pageYOffset;
  }


  constructor( private datosPostsService:PostsService,private router: Router,private route2: ActivatedRoute){
    this.userId =2; 
  }
  ngOnInit(): void {
  
  


    this.datosPostsService.obtenerPostsForUser(this.userId).subscribe(
      (data)=>this.postsPersonales=data,
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
    
    // private route2: ActivatedRoute: El objeto route2 es una instancia del servicio ActivatedRoute de 
    // Angular, que se utiliza para obtener información sobre la ruta activa en la que se encuentra el 
    // componente actual. Proporciona acceso a los parámetros de la ruta, a los datos estáticos y dinámicos 
    // asociados a la ruta, así como a otros detalles de la ruta. Este servicio se utiliza principalmente para 
    // obtener información específica sobre la ruta actual en un componente.
    this.restoreScrollPosition();
  }
  saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', String(this.scrollPosition));
  }
  crearPost()
  {
    
    this.saveScrollPosition();
    this.router.navigate(['/detallePost', 0,this.userId]);
  }
  restoreScrollPosition() {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    console.log(scrollPosition)
    console.log(typeof scrollPosition)
    if (scrollPosition) {
      console.log('si restaure')
      window.scrollTo(3000, parseInt(scrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }
    else{
      console.log('no restaure nada')
    }
  }
  
}
