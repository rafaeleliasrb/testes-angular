import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
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
}
