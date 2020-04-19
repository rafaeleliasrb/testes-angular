import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean;
  eventEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usario: Usuario) {

    if (usario.nome == 'usuario' && usario.senha == '12345') {
      this.usuarioAutenticado = true;

      this.router.navigate(['/login']);
    }
    else {
      this.usuarioAutenticado = false;
    }
    this.eventEmitter.emit(this.usuarioAutenticado);
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
