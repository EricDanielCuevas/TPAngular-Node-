import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

onClick() {
  this.email = this.iniciarSesionForm.get('email')?.value;
  this.password = this.iniciarSesionForm.get('password')?.value;
 // this.recordardatos = this.iniciarSesionForm.get('recordardatos')?.value;
  if (this.email != '' && this.password != '') {
    const usuarioDto = {
      email: this.email,
      password: this.password,
    };
    this.servicioCognito.login(this.email, this.password).subscribe(
   // this.apiService.post('/login-usuario', usuarioDto).subscribe(
      (respuesta) => {
        if (respuesta !== null && respuesta !== undefined) {
          this.authToken = respuesta;
          this.cookieService.set('token_access', this.authToken, 4, '/');
          this.router.navigate(['/']);
          window.alert("Ha iniciado sesion correctamente");

          this.error = false;
        }
      },
      (err) => {
        500;
        this.error = true;
        if (err.error.code != 'UserNotConfirmedException') {
          window.alert(err.error.message);
        }   else {
          window.alert(err.error.message);
        }        
        //this.mensajeLogin = err.error.message;
        //window.alert(err.error.message);
      }
    );
  } else {
    alert('los campos usuario o password no pueden estar vacios');
  }

}
