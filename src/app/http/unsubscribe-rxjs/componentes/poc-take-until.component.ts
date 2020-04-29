import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../../service/enviar-valor.service';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base estilo="green" [nome]="nome"
        [valor]="valor">
    </app-poc-base>
  `,
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  nome = 'Componente com takeUntil';
  valor: string;
  unsub$ = new Subject();

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.service.getValor()
      .pipe(
        tap(console.log),
        takeUntil(this.unsub$)
      )
      .subscribe(dados => this.valor = dados);
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
    console.log(`${this.nome} foi destruído`);
  }
}
