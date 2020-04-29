import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Observable, empty, Subject } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { CursosService } from '../service/cursos.service';
import { Curso } from '../model/curso';
import { AlertModalService } from '../service/alert-modal.service';
import { ConfirmModelComponent } from '../confirm-model/confirm-model.component';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  cursoSelecionado: Curso;

  constructor(
    private cursoService: CursosService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados() {
    this.cursos$ = this.cursoService.listar().pipe(
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        this.alertModalService.openDialogErro('Problema ao carregar os cursos');
        return empty();
      })
    );
  }

  preparaAtualizarCurso(cursoId: number) {
    this.router.navigate(['editar', cursoId], {relativeTo: this.route});
  }

  removerCurso(curso: Curso) {
    const dialogRef = this.dialog.open(ConfirmModelComponent, {
      width: '250px',
      data: {titulo: 'Confirmação', texto: `Deseja remover o curso ${curso.nome}?`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cursoService.deletar(curso.id)
          .pipe(take(1))
          .subscribe(
            success => {
              this.carregarDados();
            },
            error => {
              this.alertModalService.openDialogErro('Erro ao remover curso, tente novamente');
            }
          );
      }
    });
  }

}
