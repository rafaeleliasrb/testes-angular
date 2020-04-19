import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-elvis',
  templateUrl: './diretiva-elvis.component.html',
  styleUrls: ['./diretiva-elvis.component.scss']
})
export class DiretivaElvisComponent implements OnInit {

  tarefa = {
    desc: 'Descrição da tarefa',
    responsavel: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
