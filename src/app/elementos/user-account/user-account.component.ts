import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent {
  
  constructor(private router: Router ){}

  @Input() userData: any; 

  updateUser(userId:number) {
    this.router.navigate(['/detalleUser', userId])
  }

}
