import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formGroup: FormGroup;
  name: String;
  email: String;

  constructor(protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient) {
    console.log('viewdemo constructor');

  }

  ngOnInit(): void {
    console.log('Iniciando appComponent');
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  onClick() {
    console.log('ejecutando redirect en view demo');
    this.router.navigate(['/'])
  }

  onSubmit() {
    console.log('ejecutando submit');
    console.log('email:' + this.formGroup.get('email').value);
    this.email = this.formGroup.get('email').value;
  }

  changeKitty() {

    let res: Observable<Response[]> =
      this.httpClient.get<Response[]>('https://api.thecatapi.com/v1/images/search')
        .pipe(share());
    //.pipe(catchError(this.handleError));

    res.subscribe(
      value => {
        console.log('URL:' + value[0].url);
        this.url = value[0].url;
      },
      error => {
        console.log('ocurrio un error');

      });


  }

}
