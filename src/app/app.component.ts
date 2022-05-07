import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'taller';

  formGroup: FormGroup;
  formSignup: FormGroup;
  username: String;

  constructor( protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient){
    
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

  onSubmit(){
    console.log('ejecutando submit');
    console.log('username:' + this.formGroup.get('username').value);
    this.username = this.formGroup.get('username').value;
  }

  signup(){
    console.log('ejecutando signup');
    this.httpClient.post('http://localhost:3000/api/signup', {
      'username': this.formSignup.get('username').value,
      'password': this.formSignup.get('password').value,
      'email': this.formSignup.get('email').value,
    }).subscribe(value => {
      alert(JSON.stringify(value));
    });
  }

}
