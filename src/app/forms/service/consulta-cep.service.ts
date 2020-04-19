import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private httpClient: HttpClient) { }

  consultaCep(cep: string) {
    cep.replace(/\D/g, '');

    if (cep !== '') {
      return this.httpClient.get(`https://proxier.now.sh/api?url=https://viacep.com.br/ws/${cep}/json`);
    }

    return of({});
  }
}
