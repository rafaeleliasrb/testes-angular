import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial = 10;  

  constructor() { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("OnInit");
  }

  ngOnChanges(): void {
    console.log("OnChange");
  }

  ngDoCheck(): void {
    console.log("DoCheck");
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
}
