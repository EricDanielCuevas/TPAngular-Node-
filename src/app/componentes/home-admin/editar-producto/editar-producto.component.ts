import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { productos } from 'src/app/productos';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  producto = productos;
  checkoutForm;

  constructor(private route: ActivatedRoute, private form: FormBuilder, private admin:AdminService) { 
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

  onSubmit(data) {
    // Process checkout data here
    this.admin.editar(data);
    console.warn('Your order has been submitted', data);
  }

}
