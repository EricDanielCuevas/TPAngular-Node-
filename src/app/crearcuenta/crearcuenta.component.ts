import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.component.html',
  styleUrls: ['./crearcuenta.component.css']
})
export class CrearcuentaComponent implements OnInit {
  url: String;
  
  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/crearcuenta'])
  }

}
