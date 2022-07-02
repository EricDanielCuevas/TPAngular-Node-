import { Component, DoCheck , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {
  public productos = [];
  isLogged!: Boolean

  constructor(private cookieService: CookieService, protected router: Router,public CarritoService:CarritoService) { 
    this.productos = this.CarritoService.listarCarrito();
  }
    
  ngOnInit(): void {
    this.productos = this.CarritoService.listarCarrito();

  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/buscar-golosina'])
  }

  buscarGolosinas() {
    let golosina = (<HTMLInputElement>document.getElementById("txtGolosinas")).value;
    this.router.navigate(['/buscar-golosina', { golosina }]);
  }

  ngDoCheck(): void {
    this.isLogged = this.cookieService.check("token_access")
  }

  LogOut(){
    this.cookieService.delete("token_access")
    this.router.navigate(["/"])
  }
}
