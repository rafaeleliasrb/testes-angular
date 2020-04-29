import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poc-base',
  templateUrl: './poc-base.component.html',
  styleUrls: ['./poc-base.component.scss']
})
export class PocBaseComponent implements OnInit {

  @Input() estilo: string;
  @Input() nome: string;
  @Input() valor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
