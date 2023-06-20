import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REMOVE_STYLES_ON_COMPONENT_DESTROY } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  private tokenKey = 'secreta';
  constructor(private router: Router,private datosAuthService: AuthService) {}

  postAuxiliar: any;
  formulario: any;

  ngOnInit(): void {

    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  actualizarUsuario() { 
    if (this.formulario.valid) {
      this.datosAuthService.login(this.formulario.value).subscribe(
        (respuesta: any) => {
          console.log(respuesta);
          let token = respuesta.access_token;
          localStorage.setItem(this.tokenKey, token);
          this.router.navigate(['/']);
        },
        (error) => console.log('Error al obtener un user:', error),
        () => console.log('FIN')
      );
    }
  }

}
