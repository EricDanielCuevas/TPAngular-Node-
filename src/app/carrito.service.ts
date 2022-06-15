import { Injectable } from '@angular/core';
import { productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items =[];
  

  constructor() {}

  adicionarCarrito(producto){
    let encontrado=false;
    this.items.forEach(elemento => {
      if(elemento.id==producto.id){
        encontrado=true;
        elemento.cantidad+=1;
      }
    });
    if (!encontrado) {
      this.items.push(producto);     
    }
    
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){
    return this.items; 
  }
}
