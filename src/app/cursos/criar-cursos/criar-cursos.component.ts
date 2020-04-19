import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.scss'] // ,
  // providers: [CursosService]
})
export class CriarCursosComponent implements OnInit {

  cursos: string[] = [];
  ultimoCursoCriado: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.cursoEmmiter.subscribe(
      (novoCurso: string) => this.ultimoCursoCriado = novoCurso
    );
  }

  adicionarCurso(novoCurso: string) {
    this.cursosService.addCursos(novoCurso);
  }
}
