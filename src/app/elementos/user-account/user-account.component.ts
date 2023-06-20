import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent {
  
  constructor(private router: Router, public datosAuthService: AuthService){}

  @Input() userData: any; 

  updateUser(userId:number) {
    this.router.navigate(['/detalleUser', userId])
  }
  
  logout(){ 
    this.datosAuthService.logout(); 
  }

}
