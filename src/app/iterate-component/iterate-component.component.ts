import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-iterate-component',
  templateUrl: './iterate-component.component.html',
  styleUrls: ['./iterate-component.component.css']
})
export class IterateComponentComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {

    this.products = [
      {
        name:'product1',
        details:'productDetail1'
      },
      {
        name:'product2',
        details:'productDetail2'
      },
      {
        name:'product3',
        details:'productDetail3'
      }
    ];

  }

}
