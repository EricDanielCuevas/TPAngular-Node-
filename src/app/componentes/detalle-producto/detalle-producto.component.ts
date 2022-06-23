import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos } from '../../productos';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto; 
  //cantidad: number = 1;

  constructor(private route: ActivatedRoute, private carrito:CarritoService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idProducto=Number(params.get("id"))-1;
      this.producto=productos[idProducto];
      }
    );
   }

   adicionarCarrito(producto){
    this.carrito.adicionarCarrito(producto)
    window.alert("se ha seleccionado el producto : "+producto.id);  
  }

  // agregar() {
  //   if (this.cantidad >= 1) {
  //     this.cantidad++;
  //   }
  // }

  // quitar() {
  //   if (this.cantidad > 1) {
  //     this.cantidad--;
  //   }
  // }
}
