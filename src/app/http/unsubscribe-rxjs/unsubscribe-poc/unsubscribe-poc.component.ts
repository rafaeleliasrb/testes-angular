import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../../service/enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss'],
  preserveWhitespaces: true
})
export class UnsubscribePocComponent implements OnInit {

  mostraComponentes = true;

  constructor(private service: EnviarValorService) { }

  ngOnInit(): void {
  }

  emitirValor(valor: string) {
    this.service.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostraComponentes = !this.mostraComponentes;
  }
}
