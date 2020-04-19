import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {

  exibe = false;

  constructor() { }

  exibeToggle() {
    this.exibe = !this.exibe;
  }

  ngOnInit(): void {
  }

}
