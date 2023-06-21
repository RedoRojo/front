import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.scss']
})
export class DetalleUserComponent implements OnInit {
  userId: number = 0
  admin: number = 0
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private datosAuthService: AuthService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params["id"]
    }); 
  }

  async volver() { 
    const isAdmin = await this.datosAuthService.isAdmin();
    if( isAdmin ) this.router.navigate(['/admin/users'])
    else this.router.navigate(['/cuenta'])
  }
}
