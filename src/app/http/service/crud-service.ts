import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

export class CrudService<T extends {id: number}> {

    constructor(protected http: HttpClient, private API: string) { }

    listar() {
        return this.http.get<T[]>(this.API);
    }

    salvar(entity: T) {
        if (entity.id) {
            return this.http.put(`${this.API}/${entity.id}`, entity).pipe(take(1));
        }
        return this.http.post(this.API, entity).pipe(take(1));
    }

    buscarPorId(id: number) {
        return this.http.get<T>(`${this.API}/${id}`).pipe(take(1));
    }

    deletar(id: number) {
        return this.http.delete(`${this.API}/${id}`).pipe(take(1));
    }
}
