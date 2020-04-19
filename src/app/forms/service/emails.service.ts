import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private httpClient: HttpClient) { }

  verificaEmailExistente(novoEmail: string) {
    return this.httpClient.get('assets/dados/emails.json').pipe(
      delay(2500),
      map((value: {emails: any[]}) => value.emails),
      tap(console.log),
      map((value: {email: string}[]) => value.filter(v => v.email === novoEmail)),
      tap(console.log),
      map((value: any[]) => value.length > 0),
      tap(console.log)
    );
  }
}
