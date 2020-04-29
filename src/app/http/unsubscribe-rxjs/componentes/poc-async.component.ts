import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../../service/enviar-valor.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base estilo="pink" [nome]="nome"
        [valor]="valor$ | async">
    </app-poc-base>
  `,
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$: Observable<string>;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.valor$ = this.service.getValor()
      .pipe(tap(console.log));
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruído`);
  }

}
