import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( protected router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/buscar-golosina'])
  }

}
