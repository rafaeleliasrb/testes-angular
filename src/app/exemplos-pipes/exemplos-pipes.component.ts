import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'A origem das espécies',
    estrelas: 4.9874,
    paginas: 250,
    preco: 60.00,
    dataLancamento: new Date(1850, 10, 28),
    url: 'http://darwin.com/origem-das-especies'
  };

  cursos = ['Angular', 'Java', 'Ionic', 'Javascript'];
  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor async'), 3000);
  });

  valorAsync2 = new Observable<string>(observer => {
    setInterval(() => observer.next('Valor async 2'), 3000);
  });

  constructor() { }

  ngOnInit(): void {
  }

  filtrarCursos() {
    if (this.filtro !== undefined && this.filtro.length > 0 && this.filtro.trim() !== '') {
      return this.cursos.filter(
        curso => curso.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0
        );
    }
    return this.cursos;
  }
}
