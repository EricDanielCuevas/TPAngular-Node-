import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { share, catchError } from 'rxjs/operators';

import { Response } from './response';

@Component({
  templateUrl: './view-demo.component.html',
  styleUrls: ['./view-demo.component.css']
})
export class ViewDemoComponent implements OnInit {

  url: String;

  constructor(protected router:Router, protected httpClient: HttpClient) { 
    console.log('viewdemo constructor');

  }

  ngOnInit(): void {
  }

  onClick(){
    console.log('ejecutando redirect en view demo');
    this.router.navigate(['/'])
  }

  changeKitty(){

    let res: Observable<Response[]> = 
      this.httpClient.get<Response[]>('https://api.thecatapi.com/v1/images/search')
      .pipe(share());
      //.pipe(catchError(this.handleError));
    
    res.subscribe(
        value=> {
            console.log('URL:' + value[0].url);
            this.url = value[0].url;
                }, 
        error => { 
          console.log('ocurrio un error');

        });


  }

}
