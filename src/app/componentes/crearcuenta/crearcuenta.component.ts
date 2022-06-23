import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  mensajeCrearCuenta: string;
  crearCuentaForm: any;

  constructor(private _builder: FormBuilder) { 
    this.mensajeCrearCuenta = '';
    this.crearCuentaForm = this._builder.group({
      email: '',
     password: '',
     nombre: '', 
     apellido: '',
     direccion: ''
    })
  }

  ngOnInit(): void {
  }

  crearCuenta(){
   // let usuario: Usuario = this.crearCuentaForm.value;
   let usuario;
   this.mensajeCrearCuenta = "creado" ;
    /*this.usuarioService.gestionarSesion(usuario, environment.API_BASE_URL + '/cognito/crear-cuenta').then((result) => { 
        this.mensajeCrearCuenta = result.Message ;
        this.crearCuentaForm.reset()
    }, (error) => {
      this.mensajeCrearCuenta = error.Message;
    });*/
  }


}
