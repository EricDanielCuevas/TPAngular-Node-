import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CarritoService } from '../../services/carrito.service';
//usamos la clase apiRest
import { RestApiService } from '../../services/restApiService';


@Component({
  selector: 'app-buscar-golosina',
  templateUrl: './buscar-golosina.component.html',
  styleUrls: ['./buscar-golosina.component.css']
})
export class BuscarGolosinaComponent implements OnInit {

  productos = [];

  constructor(private route: ActivatedRoute, private carrito: CarritoService, private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let valorBusqueda = params["golosina"];
        this.buscarProductos(valorBusqueda);
      }
    );
  }

  buscarProductos(valorBusqueda) {
    //con el suscribe invocamos al Observable para que comparta informacion cuando se pida una solicitud
    //se le carga el resultado del json a productos
    this.restApiService.buscarGolosinas(valorBusqueda).subscribe(data => this.productos = data);
    //muestra los productos encontrados
    console.log(this.productos);
  }
  adicionarCarrito(producto) {
    this.carrito.adicionarCarrito(producto)
    window.alert("se ha seleccionado el producto : " + producto.id);
  }
}
