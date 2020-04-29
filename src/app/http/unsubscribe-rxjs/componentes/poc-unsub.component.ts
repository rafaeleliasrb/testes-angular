import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../../service/enviar-valor.service';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-poc-unsub',
  template: `
    <app-poc-base estilo="red" [nome]="nome"
        [valor]="valor">
    </app-poc-base>
  `,
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  nome = 'Componente com unsubscribe';
  valor: string;
  sub: Subscription[] = [];

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.sub.push(this.service.getValor()
      .pipe(tap(console.log))
      .subscribe(dados => this.valor = dados));
  }

  ngOnDestroy() {
    this.sub.forEach(s => s.unsubscribe());
    console.log(`${this.nome} foi destruído`);
  }
}
