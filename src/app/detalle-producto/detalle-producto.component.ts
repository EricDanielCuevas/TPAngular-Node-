import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  cantidad: number = 1;

  public producto = {
    titulo: "Imperdibles caramelos de miel",
    precio: 100,
    precioConDescuento: 50,
    porcentajeDescuento: 50,
    imagen: './assets/arcor_miel_menta_bolsa.png',
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  agregar() {
    if (this.cantidad >= 1) {
      this.cantidad++;
    }
  }

  quitar() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
}
