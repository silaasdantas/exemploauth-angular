import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  usuarioAutenticado: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  autenticar() {
    this.authService.autenticar(this.usuario);
  }

}
