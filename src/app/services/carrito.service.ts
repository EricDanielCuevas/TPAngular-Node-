import { Injectable } from '@angular/core';
import { productos } from '../productos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestApiService } from '../services/restApiService';


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
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito() {
  return this.items;
  }

  
}

