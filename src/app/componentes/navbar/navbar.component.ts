import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public productos = [];
  constructor(protected router: Router,public CarritoService:CarritoService) { 
    this.productos = CarritoService.listarCarrito();
  }
    
  ngOnInit(): void {
    
  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/buscar-golosina'])
  }

  buscarGolosinas() {
    let golosina = (<HTMLInputElement>document.getElementById("txtGolosinas")).value;
    this.router.navigate(['/buscar-golosina', { golosina }]);
  }

}
