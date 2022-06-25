import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { productos } from '../../productos';
import{CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos=productos;
  items=[];  

  constructor(protected router: Router,private carrito:CarritoService) { }

  ngOnInit(): void {
    this.items=this.carrito.listarCarrito();
    // this.carrito.calcularTotalPrecio();
  }

  onClick(){
    this.router.navigate(['/'])
  }

  eliminar(id){
    if(confirm('¿Seguro Desea Eliminar?')){
      this.carrito.eliminar(id);
      // const resultado= this.items.findIndex(e=>e.id==id);
      // this.items.splice(resultado,1);
      // return this.items;
    }  

  }

}