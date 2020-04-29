import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from '../../service/enviar-valor.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-poc',
  template: `
    <app-poc-base estilo="yellow" [nome]="nome"
        [valor]="valor">
    </app-poc-base>
  `,
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
    this.service.getValor()
      .pipe(tap(console.log))
      .subscribe(dados => this.valor = dados);
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruído`);
  }
}
