import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss']
})
export class ReactiveSearchComponent implements OnInit {

  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  FIELDS = 'name,description,version,homepage';
  displayedColumns = ['nome', 'versao'];

  result$: Observable<any>;
  total = 0;
  queryField = new FormControl();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.result$ = this.queryField.valueChanges
    .pipe(
      tap((value: string) => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => {
        let params = new HttpParams();
        params = params.set('search', value).set('fields', this.FIELDS);
        return this.http.get(this.SEARCH_URL, { params });
      }),
      tap((resp: any) => this.total = resp.total),
      map((resp: any) => resp.results)
    );
  }

  onSearch() {
    const fields = 'name,description,version,homepage';
    let value: string = this.queryField.value;
    console.log(value);

    if (value && value.trim() !== '') {
      value = value.trim();

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);

      this.result$ = this.http.get(this.SEARCH_URL, { params })
      .pipe(
        tap((resp: any) => this.total = resp.total),
        map((resp: any) => resp.results)
      );
    }
  }
}
