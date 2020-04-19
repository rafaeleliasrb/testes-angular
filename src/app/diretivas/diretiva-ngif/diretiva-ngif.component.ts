import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss']
})
export class DiretivaNgifComponent implements OnInit {

  cursos = ['Física'];
  exibe = false;

  constructor() { }

  exibeToggle() {
    this.exibe = !this.exibe;
  }

  ngOnInit(): void {
  }

}
