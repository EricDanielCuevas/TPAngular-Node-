import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-golosina',
  templateUrl: './buscar-golosina.component.html',
  styleUrls: ['./buscar-golosina.component.css']
})
export class BuscarGolosinaComponent implements OnInit {

  productos = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let valorBusqueda = params["golosina"];
        this.buscarProductos(valorBusqueda);
      }
    );
  }

  buscarProductos(valorBusqueda) {

    //Aca deberiamos obtener los productos que tenemos en la base de datos
    let productosEnLaBaseDeDatos = [
      { nombre: 'Chocolate', marca: 'Arcor', titulo: 'chocolate blanco', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' },

      { nombre: 'Caramelos', marca: 'Arcor', titulo: 'menta cristal', precio: 233.2, imagen: './assets/arcor_menta_bolsa.png' },

      { nombre: 'Chupetines', marca: 'Lipo', titulo: 'sabor a naranja', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' },

      { nombre: 'Chocolate', marca: 'Milka', titulo: ' chocolate negro', precio: 233.2, imagen: './assets/arcor_menta_bolsa.png' },

      { nombre: 'Barritas', marca: 'Arcor', titulo: 'avena con chocolate', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' }
    ];
    if (valorBusqueda != "") {
      this.productos = productosEnLaBaseDeDatos.filter(producto => producto.marca == valorBusqueda);
    }
    else {
      this.productos = productosEnLaBaseDeDatos;
    }
  }

}
