import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Aluno } from '../alunos/aluno';
import { AlunosService } from '../alunos/alunos.service';

@Injectable({
    providedIn: 'root'
})
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Aluno> | Aluno {
    return this.alunosService.buscarPorId(route.params.id);
  }
}
