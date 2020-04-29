import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, filter, flatMap } from 'rxjs/operators';

import { Estado } from '../model/estado';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>('assets/dados/estados.json');
  }

  getCagos() {
    return [
      {nome: 'Dev', nivel: 'Júnior', descricao: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Sênior', descricao: 'Dev Sr'}
    ];
  }

  getTecnologias() {
    return [
      {nome: 'Java', descricao: 'Java Completo'},
      {nome: 'Javascript', descricao: 'Javascript Completo'},
      {nome: 'PHP', descricao: 'PHP Completo'},
      {nome: 'Ruby', descricao: 'Ruby Completo'}
    ];
  }

  getNewsletterOps() {
    return [
      {valor: 's', descricao: 'Sim'},
      {valor: 'n', descricao: 'Nao'}
    ];
  }

  getFrameworks() {
    return ['Angular', 'React', 'Vue', 'JQuery'];
  }

  getCidadesPorEstado(sigla: string): Observable<string[]> {
    return this.httpClient.get('assets/dados/cidades-estados.json').pipe(
      flatMap((estados: {sigla: string, nome: string, cidades: string[]}[]) => estados),
      filter(estado => estado.sigla === sigla),
      map(estado => estado.cidades)
    );
  }
}
