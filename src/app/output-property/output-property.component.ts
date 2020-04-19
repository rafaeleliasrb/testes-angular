import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') valorCampoInput: ElementRef;

  constructor() { }

  decrementa() {
    console.log('valorCampoInput: ' + this.valorCampoInput.nativeElement.value);
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  ngOnInit(): void {
  }
}
