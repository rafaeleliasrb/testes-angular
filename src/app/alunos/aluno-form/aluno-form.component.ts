import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  aluno: any;
  inscricao: Subscription;

  mudouNome = false;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.aluno = this.alunosService.buscarPorId(params.id);

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.mudouNome = true;
  }

  podeDesativar() {
    if (this.mudouNome) {
      return confirm('Tem certeza que deseja sair?');
    }

    return true;
  }
}
