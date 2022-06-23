import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'taller';
  formGroup: FormGroup;
  formSignup: FormGroup;
  username: String;
  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient) {

  }

  ngOnInit(): void {
    console.log('Iniciando appComponent');
    this.formGroup = this.formBuilder.group({
      username: new FormControl('',  Validators.required),
    });
    this.formSignup = this.formBuilder.group({
      username: new FormControl('',  Validators.required),
      email: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required),
    });
  }

  onClick(){
    console.log('ejecutando redirect');
    this.router.navigate(['/view'])
  }

}
