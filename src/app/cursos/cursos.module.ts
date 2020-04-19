import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursosComponent,
    CriarCursosComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
