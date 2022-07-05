import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "../interfaces/Session";
import { Usuario } from "../interfaces/usuario";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) {}
  
  gestionarSesion(usuario: Usuario, url: string) : Promise<Session> {
    return new Promise<Session>((resolve, reject) => {
      this.http.post<Session>(url, usuario).subscribe
        (value => {
          resolve(value);
        }
        , error => {
          reject({ Message: this.parseError(error), IdToken: '' })     
        });
    })
  }
  private parseError(error: any): string {
    if (error.status == '404')
      return 'El servidor no se encuentra disponible!'
    else if(error.status == '400')
      return error.error.Message
    else
      return 'Error en el servidor, intente nuevamente!'
  }

}