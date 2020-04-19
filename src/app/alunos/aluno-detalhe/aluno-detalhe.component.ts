import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router) { }

  ngOnInit(): void {
    this.inscricao = this.route.data.subscribe(
      dados => this.aluno = dados.aluno
    );
  }

  editarAluno() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
