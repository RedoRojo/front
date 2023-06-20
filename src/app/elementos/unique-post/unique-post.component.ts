import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  @Input() lastPId: any; 
  @Input() userId: any; 
  @Input() posts:any; 
  highlightedPostId: any;
  @Input() pagina:any;
  ngOnInit(): void {
    if(this.lastPId===undefined)
    {
      console.log("No existe un ultimo post creado ")

    }
    else{
      
      
      setTimeout(() => {
        console.log("el ultimo post creado es "+this.lastPId)
        console.log("y su tipo es "+typeof this.lastPId)
        this.highlightedPostId = this.lastPId;
        const element = document.querySelector('#p'+this.lastPId);
        if (element) {
          console.log('entrooo')
          element.scrollIntoView({ behavior: 'auto',block: 'center'});
          
          //this.lastPost.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        else{
          console.log('no entroo')
        }
      }); 
      // El uso de setTimeout en este caso tiene un propó
      // sito específico: dar tiempo a Angular para que renderice completamente lo
      // s elementos en el DOM antes de ejecutar el código que realiza la selección y el desplazamiento del elemento.
      // Cuando se realiza la asignación de valores en Angular, el proceso de renderizado 
      // puede tomar un tiempo dependiendo de la complejidad de la vista y de otros factores. 
      // Si intentas seleccionar un elemento inmediatamente después de asignar los valores, 
      // es posible que el elemento aún no exista en el DOM y, por lo tanto, no se pueda seleccionar correctamente.
    }
  }
 

  eliminarPost(postId:number){
    return this.datosPostsService.eliminarPostSegunId(postId).subscribe(
      (data) =>
      {
        console.log(data);
        this.datosPostsService.obtenerPostsForUser(this.userId).subscribe(
          (data)=>this.posts=data,
          (error)=>console.log(error),
          ()=>console.log('FIN')
        )
        // location.reload();

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
    this.router.navigate(['/detalleComment', postId, this.pagina]);
  }
  
  getVariableType(variable: any): string {
    return typeof variable;
  }
}
