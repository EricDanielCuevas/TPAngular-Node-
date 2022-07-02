"use strict";

import { Injectable, OnInit } from '@angular/core';
// dependencia
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CognitoService {
  postId: any;

    constructor(private http: HttpClient) {
    }

      crearcuenta(name: string, apellido: string, email:string, password:string, direccion: string) {
        return this.http.post('http://localhost:3000/api/crearcuenta',{name, apellido ,email, password, direccion},{observe:'response'}) ;
      }

      login(email:string, password:string) {
        return this.http.post('http://localhost:3000/api/login',{email, password},{observe:'response'}) ;
      }

}