import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: any[] = [];
  cursoEmmiter = new EventEmitter<string>();

  constructor() {
    this.cursos = [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'Ionic'}
    ];
  }

  getCursos() {
    return this.cursos;
  }

  getCursoPorId(cursoId: number) {
    const cursoExistente = this.cursos.find((curso: any) => curso.id == cursoId);
    return cursoExistente;
  }

  addCursos(novoCurso: any) {
    this.cursos.push(novoCurso);
    this.cursoEmmiter.emit(novoCurso);
  }
}
