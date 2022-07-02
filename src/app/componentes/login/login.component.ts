import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CognitoService } from '../../services/cognito.service';
import { UsuarioService } from '../../services/usuario.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iniciarSesionForm: FormGroup;
  
  email!: any;
  password!: any;
  mensajeLogin: string;
  isLogged!: Boolean;
  authToken!: any;
  error!: Boolean;

  constructor(private cookieService: CookieService, protected router: Router,private servicioCognito: CognitoService, private _builder: FormBuilder, private _usuarioService: UsuarioService) { }

 /* ngOnInit(): void {
    this.iniciarSesionForm = this._builder.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/)]),
  });
}*/

ngOnInit(): void {
  this.isLogged = this.cookieService.check('token_access');
  if (this.isLogged) {
    this.router.navigate(['/login']);
  }
  this.iniciarSesionForm = this._builder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    //recordardatos: new FormControl(false, Validators.required),
  });
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

crearcuenta(){
  this.router.navigate(['/crearcuenta'])
}


}