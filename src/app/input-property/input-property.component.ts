import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  @Input() nomeCurso: string;

  constructor() { }

  ngOnInit(): void {
  }

}
