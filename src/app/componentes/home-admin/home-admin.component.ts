import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productos } from 'src/app/productos';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  producto = productos;

  constructor(private route: ActivatedRoute, private admin:AdminService) { }

  ngOnInit(): void {
  }

  eliminar(id){
    if(confirm('¿Seguro Desea Eliminar?')){
      this.admin.eliminar(id);
      // const resultado= this.items.findIndex(e=>e.id==id);
      // this.items.splice(resultado,1);
      // return this.items;
    }  
  }

}
