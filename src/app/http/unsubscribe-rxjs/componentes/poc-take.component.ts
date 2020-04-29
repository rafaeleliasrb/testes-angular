import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../../service/enviar-valor.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base estilo="blue" [nome]="nome"
        [valor]="valor">
    </app-poc-base>
  `,
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome = 'Componente com take';
  valor: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.service.getValor()
      .pipe(
        tap(console.log),
        take(1)
        )
      .subscribe(dados => this.valor = dados);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruído`);
  }

}
