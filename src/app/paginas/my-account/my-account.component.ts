import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users-service.service';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit{
  userId: number; 
  userData: any;
  constructor(private datosUsersService: UsersService) { 
    this.userId = 2; 
  }

  ngOnInit(): void {
    this.datosUsersService.obtenerUser(this.userId).subscribe(
      (data)=>this.userData=data,
      (error)=>console.log(error), 
      ()=>console.log("User got correctly") 
    )
  }
}
