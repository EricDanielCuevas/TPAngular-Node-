import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/carrito.service';
import { productos } from 'src/app/productos';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-carrousel-cards-promos',
  templateUrl: './carrousel-cards-promos.component.html',
  styleUrls: ['./carrousel-cards-promos.component.css']
})
export class CarrouselCardsPromosComponent implements OnInit {
  producto = productos;
  
  constructor(private route: ActivatedRoute, private carrito:CarritoService) { }
  
  ngOnInit(): void {
  }

  adicionarCarrito(producto){
    productos.push(producto)
    this.carrito.adicionarCarrito(producto)
    window.alert("se ha seleccionado el producto : "+producto.id);  
  }

}
