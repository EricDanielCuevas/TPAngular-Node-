import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CognitoService } from '../../services/cognito.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {

  mensajeCrearCuenta: string;
  //crearCuentaForm: any;
  usuario =[];

  constructor(private _builder: FormBuilder, private router:Router, private servicioCognito: CognitoService){
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
  crearCuentaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      direccion: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    });
  
    crearcuenta(Nombre: string, Apellido:string, Email:string, Password: string, Direccion: string){
      this.servicioCognito.crearcuenta(Nombre, Apellido, Email, Password, Direccion).subscribe(data=> {
        console.log(data);
      })
      
      this.router.navigate(['/'])    
    }
     
     onSubmit() {
       var Nombre=(this.crearCuentaForm.get('nombre')?.value);
       var Apellido=(this.crearCuentaForm.get('apellido')?.value);
       var Email=(this.crearCuentaForm.get('email')?.value);
       var Direccion=(this.crearCuentaForm.get('direccion')?.value);      
       var Password=(this.crearCuentaForm.get('password')?.value);
       this.crearcuenta(Nombre, Apellido, Email, Password, Direccion); 
       
      console.log(Nombre)

      }

  }

  /*    this.mensajeRegister = result.Message ;
        this.msgType= "success";
        this.crearCuentaForm.reset()
    }, (error) => {
      */

