import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productos } from 'src/app/productos';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { RestApiService } from '../../../services/restApiService';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = productos;
  checkoutForm;

  constructor(private route: ActivatedRoute, private form: FormBuilder, private admin: AdminService, private restApiService: RestApiService) {

    this.checkoutForm = this.form.group({
      nombre: '',
      marca: '',
      descripcion: '',
      precio: '',
      cantidad: '',
      imagen: ''
    });
  }

  ngOnInit(): void {

  }


  //7onSubmit(data) {
  // Process checkout data here
  // this.admin.agregar(data);
  //console.warn('Your order has been submitted', //data);
  //}
  onSubmit(producto) {
    this.restApiService.agregarProductoNuevo(producto).subscribe(data => this.producto = data)
    console.log("se agrego un nuevo producto")
  }
}
