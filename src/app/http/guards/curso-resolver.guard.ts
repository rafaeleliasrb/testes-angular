import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from '../model/curso';
import { CursosService } from '../service/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

  constructor(private cursosService: CursosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Curso | Observable<Curso> | Promise<Curso> {
    if (route.params && route.params.id) {
      return this.cursosService.buscarPorId(route.params.id);
    }

    return of({
      id: null,
      nome: null
    });
  }

}
