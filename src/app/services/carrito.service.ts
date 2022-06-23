import { Injectable } from '@angular/core';
import { productos } from '../productos';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos=productos;
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
    //localStorage.setItem("carrito",JSON.stringify(this.items));
  }

  eliminar(id){
    const resultado= this.items.findIndex(e=>e.id==id);
    this.items.splice(resultado,1);
    return this.items;
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){
    //this.items=JSON.parse(localStorage.getItem("carrito"));
    return this.items; 
  }
}
