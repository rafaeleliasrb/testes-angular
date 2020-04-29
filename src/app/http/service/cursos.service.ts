import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../model/curso';
import { environment } from '../../../environments/environment';
import { delay, take } from 'rxjs/operators';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends CrudService<Curso>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}/cursos`);
  }

}
