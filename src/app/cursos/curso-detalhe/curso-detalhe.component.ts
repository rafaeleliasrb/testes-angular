import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  curso: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {
    // console.log(route.snapshot.params.id);
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.curso = this.cursoService.getCursoPorId(params.id);

        if (this.curso == null) {
          this.router.navigate(['/cursoNaoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
