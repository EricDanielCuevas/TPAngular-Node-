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
  items=[];  
  total: number = 0;
  totalCantidad: number=0;

  constructor(protected router: Router,private carrito:CarritoService) { }

  ngOnInit(): void {
    this.items=this.carrito.listarCarrito();
    
    this.total = this.items
      .map((item) => item.precio * item.cantidad)
      .reduce((acc, curr) => acc + curr);
    
      this.totalCantidad=this.items
      .map((item) =>item.cantidad )
      .reduce((acc, curr) => acc + curr);  
  }

  onClick(){
    this.router.navigate(['/'])
  }

  eliminar(id){
    if(confirm('¿Seguro Desea Eliminar?')){
      console.log("cant items:"+this.items); 
      console.log("id Encontrado :"+id); 
      this.carrito.eliminar(id);  
      if (this.items.length==0){this.total=0;} 
      if (this.items.length==0){this.totalCantidad=0;}
      if(this.items.length!=0){this.ngOnInit();}   
    }
  }

  confirmarCompra(){
    this.carrito.postConfirmarCompra().subscribe({
      next:()=>{this.items=this.carrito.limpiarCarrito()},
      error(err) {
        console.log(err);    
      }
    });
    //this.carrito.postConfirmarCompra().subscribe(()=>{this.items=this.carrito.limpiarCarrito()});
  }
}

