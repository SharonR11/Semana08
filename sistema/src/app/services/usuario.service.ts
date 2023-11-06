import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   private url = 'http://localhost:4000/api/usuario';

  constructor(private http: HttpClient) { 

  }

//   getData(): Observable<any> {
//     return this.http.get(this.url);
//   }

    getUsuarios():Observable<any> {
    return this.http.get<Usuario[]>(`${this.url}`)
    }

    deleteUsuario(id: number): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`)
    }

    guardarUsuario(usuario: Usuario): Observable<Object> {
        return this.http.post(this.url, usuario);
    }


}
