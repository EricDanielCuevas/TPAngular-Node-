import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/carrito.service';
import { productos } from 'src/app/productos';

@Component({
  selector: 'app-candy',
  templateUrl: './candy.component.html',
  styleUrls: ['./candy.component.css']
})
export class CandyComponent implements OnInit {

  producto = productos;

  constructor(private route: ActivatedRoute, private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  adicionarCarrito(producto){
    //productos.push(producto)
    this.carrito.adicionarCarrito(producto)
    window.alert("se ha seleccionado el producto : "+producto.id);  
  }

}
