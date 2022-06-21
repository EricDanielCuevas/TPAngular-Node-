import { Injectable } from '@angular/core';
import { productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  productos=productos;
  items =[];

  constructor() { }

  agregar(producto){
      this.productos.push(producto);
      return this.productos;
  }

  editar(id){
}
  
  buscar(id) {
    this.productos.findIndex(e=>e.id==id)
  }

  eliminar(id){
    const resultado= this.productos.findIndex(e=>e.id==id);
    this.productos.splice(resultado,1);
    return this.productos;
  }
}
