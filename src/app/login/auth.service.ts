import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { Token } from '../token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public usuarioAutenticado: boolean = false;
  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  public autenticar(usuario: Usuario): void {
    this.obterToken(usuario).then((token: Token) => {
      if (token) {
        this.setTokenLocalStorage(token);
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['dashboard'])
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
        //todo: informar a mensagem que nao deu certo

      }
    });
  }



  private obterToken(usuario: Usuario): Promise<Token> {
    return this.http.post(`${this.baseUrl}/api/values`, usuario)
      .toPromise()
      .then((response: Token) => response);
  }

  public usuarioEstaAutenticado(): boolean {
    return this.getTokenLocalStorage() !== null ? true : false;
  }
}
