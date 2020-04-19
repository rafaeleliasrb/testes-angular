import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    new Aluno(1, 'José', 'jose@email.com'),
    new Aluno(2, 'Maria', 'maria@email.com'),
    new Aluno(3, 'Joana', 'joana@email.com')
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  buscarPorId(alunoId: number) {
    return this.alunos.find(aluno => aluno.id == alunoId);
  }
}
