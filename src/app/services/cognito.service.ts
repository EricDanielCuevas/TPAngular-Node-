import { Injectable, OnInit } from '@angular/core';
// 1- importas la dependencia
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class CognitoService {
  postId: any;

    constructor(private http: HttpClient) {
    }

      crearcuenta(name: string, apellido: string, email:string, password:string, direccion: string) {
        return this.http.post('http://localhost:3900/api/crearcuenta',{name, apellido ,email, password, direccion},{observe:'response'}) ;
      }

}