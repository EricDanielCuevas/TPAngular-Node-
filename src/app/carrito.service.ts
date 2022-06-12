import { Injectable } from '@angular/core';
import { productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos=productos; 
  items =[];

  constructor() { }

  adicionarCarrito(producto){
    this.items.push(producto);  
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){
    return this.items; 
  }
}
