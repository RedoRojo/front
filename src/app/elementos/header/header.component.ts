import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  private tokenKey = 'secreta';
  isAdmin: any; 
  constructor(public datosAuthService: AuthService) {}
  
  
  async ngOnInit(): Promise<void> {
    this.isAdmin = await this.datosAuthService.isAdmin();
    console.log("definitivamente es un admin", this.isAdmin)
  }
}
