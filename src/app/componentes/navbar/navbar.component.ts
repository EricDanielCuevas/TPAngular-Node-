import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  buscarGolosinas() {
    let golosina = (<HTMLInputElement>document.getElementById("txtGolosinas")).value;
    this.router.navigate(['/buscar-golosina', { golosina }]);
  }

}
