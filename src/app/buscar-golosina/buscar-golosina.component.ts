import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { productos } from '../productos';


@Component({
  selector: 'app-buscar-golosina',
  templateUrl: './buscar-golosina.component.html',
  styleUrls: ['./buscar-golosina.component.css']
})
export class BuscarGolosinaComponent implements OnInit {

  productos=[];
  producto = productos;
  
  constructor(private route: ActivatedRoute, private carrito:CarritoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let valorBusqueda = params["golosina"];
        this.buscarProductos(valorBusqueda);
      }
    );
  }

  buscarProductos(valorBusqueda) {
     if (valorBusqueda != "") {
       this.productos = this.producto.filter(producto => producto.marca.toUpperCase() == valorBusqueda.toUpperCase());
     }
     else {
       this.productos = this.producto;
    }
  }
  adicionarCarrito(producto){
    this.carrito.adicionarCarrito(producto)
    window.alert("se ha seleccionado el producto : "+producto.id);  
  }

}
