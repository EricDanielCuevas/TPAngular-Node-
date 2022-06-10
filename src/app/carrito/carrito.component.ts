import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productos } from '../productos';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cantidad: number = 1;
  productos=productos; 

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/'])
  }

  agregar() {
    if (this.cantidad >= 1) {
      this.cantidad++;
    }
  }

  quitar() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

}
