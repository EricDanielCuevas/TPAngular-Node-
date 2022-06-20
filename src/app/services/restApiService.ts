import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Decorador que marca una clase como disponible para ser proporcionada e inyectada como dependencia//
@Injectable({
    providedIn: 'root',
})

export class RestApiService {


    apiURL = 'http://localhost:3000';


    //Http client: Realiza solicitudes HTTP.
    //Este servicio está disponible como una clase inyectable, con métodos para realizar  solicitudes HTTP. Cada método de solicitud tiene varias firmas y el tipo de devolución varía según la firma que se llama (principalmente los valores de observe y responseType)

    constructor(private http: HttpClient) { }

    //este método va a retornar un Observable q va a ser la rta de la busqueda
    buscarGolosinas(valorBusqueda): Observable<any> {

        if (valorBusqueda != "" && valorBusqueda != undefined) {
            
              //hace una llamada get a esa url (a la api, Node) y retorna la respuesta al /componenteBuscarGolosina y BuscarGolosina lo asigna a la propiedad productos usada ///en el front
            return this.http.get<any>(this.apiURL + '/productos/getAll?golosina=' + valorBusqueda);
        }

        return this.http
            .get<any>(this.apiURL + '/productos/getAll');
    }
}