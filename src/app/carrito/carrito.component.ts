import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cantidad: number = 1;
  constructor() { }

  ngOnInit(): void {
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
