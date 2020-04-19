import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string;
  valorSalvo: string;
  isMouseOver = false;
  nome = 'abc';
  nomeDoCurso = 'Angular';
  valorInicial = 10;
  valorCicloDeVida = 20;
  exibirComponenteCicloDeVida = true;

  constructor() { }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento);
  }

  mudarValorCicloDeVida() {
    this.valorCicloDeVida++;
  }

  destruirComponenteCicloDeVida() {
    this.exibirComponenteCicloDeVida = false;
  }

  ngOnInit(): void {
  }

}
