import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  abstract submit(): void;

  onSubmit() {

    if (this.formulario.valid) {
      this.submit();
    }
    else {
      this.validarCampos(this.formulario);
    }
  }

  validarCampos(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.validarCampos(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
    this.formulario.markAsUntouched();
  }
}
