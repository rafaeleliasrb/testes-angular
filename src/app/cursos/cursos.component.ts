import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any = [];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (params: any) => this.pagina = params.pagina
    );
  }

  proximaPagina(): void {
    this.router.navigate(['/cursos'],
      {queryParams: {pagina: ++this.pagina}});
  }

  paginaAnterior(): void {
    this.router.navigate(['/cursos'],
      {queryParams: {pagina: --this.pagina}});
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
