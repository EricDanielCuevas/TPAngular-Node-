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
  crearCuentaForm: FormGroup;
  //usuario =[];

  nombre!: String;
  apellido!: String;
  direccion!: String;
  email!: String;
  password!: String;
  constructor(private _builder: FormBuilder, private router:Router, private servicioCognito: CognitoService){
    this.mensajeCrearCuenta = '';

  }  

  ngOnInit(): void {
    this.crearCuentaForm = this._builder.group({
      nombre: new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/)),
      apellido: new FormControl('', Validators.pattern(/^[a-zA-Z\s]+$/)),
      direccion: new FormControl('', Validators.pattern(/^[A-Za-z0-9\s]+$/g)),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).*$/)]),
    });
  }  
    crearcuenta(Nombre: string, Apellido:string, Email:string, Password: string, Direccion: string){
      this.servicioCognito.crearcuenta(Nombre, Apellido, Email, Password, Direccion).subscribe(data=> {

        console.log(data);
        this.router.navigate(['/login'])    
      }, error => { 
        console.log(error);
        this.crearCuentaForm.reset(); //resetea el formulario
      
      })
    }
     
     onSubmit() {
       var Nombre =(this.crearCuentaForm.get('nombre')?.value);
       var Apellido=(this.crearCuentaForm.get('apellido')?.value);
       var Email=(this.crearCuentaForm.get('email')?.value);
       var Direccion=(this.crearCuentaForm.get('direccion')?.value);      
       var Password=(this.crearCuentaForm.get('password')?.value);

       if (Nombre != '' && Apellido != '' && Email != '' && Direccion != '' && Password != '' ){
        this.crearcuenta(Nombre, Apellido, Email, Password, Direccion); 
       
        window.alert(Nombre + " " + "Se ha creado su cuenta, verifiquela");
      }else{
        window.alert("Verifique los campos");
      }
      }

  }

