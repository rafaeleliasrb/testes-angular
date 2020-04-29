import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { take, map, switchMap } from 'rxjs/operators';

import { MyErrorStateMatcher } from 'src/app/forms/my-error-state-matcher';
import { CursosService } from '../service/cursos.service';
import { Curso } from '../model/curso';
import { AlertModalService } from '../service/alert-modal.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true,
})
export class CursosFormComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cursosSevice: CursosService,
    private alertService: AlertModalService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    // this.carregarCursoEdicao();
    const curso = this.route.snapshot.data.curso;

    this.formulario = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {

      this.cursosSevice.salvar(this.formulario.value)
        .subscribe(
          success => {
            this.alertService.openDialogSucesso('Curso salvo com sucesso');
            this.location.back();
          },
          error => this.alertService.openDialogErro('Erro ao salvar o curso. tente novamente'),
          () => console.log('Curso salvo')
        );
    }
  }

  onCancel() {
    this.formulario.reset();
    console.log('Cancelado');
  }

  temErro(campo: string) {
    return this.formulario.get(campo).errors;
  }

  // private carregarCursoEdicao() {
  //   this.route.params
  //     .pipe(
  //       map(params => params.id),
  //       switchMap(cursoId => this.cursosSevice.buscaCursoPorId(cursoId))
  //     )
  //     .subscribe(curso => this.atualizarFormulario(curso));
  // }

  // private atualizarFormulario(curso: Curso) {
  //   this.formulario.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }

}
