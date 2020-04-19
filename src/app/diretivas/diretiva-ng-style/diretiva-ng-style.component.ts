import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent implements OnInit {

  ativo = false;
  tamanhoFonte = 10;

  constructor() { }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

  ngOnInit(): void {
  }

}
