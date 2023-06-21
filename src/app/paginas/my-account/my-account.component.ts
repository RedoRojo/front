import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users-service.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{
  userId: number; 
  userData: any;
  constructor(
    private datosUsersService: UsersService,
    private datosAuthService: AuthService  
  ) { 
    this.userId = 0; 
  }

  ngOnInit(): void {
    this.userId = this.datosAuthService.getUserId(); 
    this.datosUsersService.obtenerUser(this.userId).subscribe(
      (data)=>this.userData=data,
      (error)=>console.log(error), 
      ()=>console.log("User got correctly") 
    )
  }
}
