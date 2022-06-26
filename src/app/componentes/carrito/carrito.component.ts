import { Component, Input, OnInit, Output, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { productos } from '../../productos';
import{CarritoService} from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  productos=productos;
  items=[];  
  total: number = 0;

  constructor(protected router: Router,private carrito:CarritoService) { }

  ngOnInit(): void {
    this.items=this.carrito.listarCarrito();
    this.total = this.items
    
      .map((item) => item.precio * item.cantidad)
      .reduce((acc, curr) => acc + curr);
  }

  onClick(){
    this.router.navigate(['/'])
  }

  eliminar(id){
    if(confirm('¿Seguro Desea Eliminar?')){
      this.carrito.eliminar(id);  
      if (this.items.length==0) this.total=0;
      this.ngOnInit(); 
      }
    }  

  }

