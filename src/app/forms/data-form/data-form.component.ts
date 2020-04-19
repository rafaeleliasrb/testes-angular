import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Estado } from '../model/estado';
import { DropdownService } from '../service/dropdown.service';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { MyErrorStateMatcher } from '../my-error-state-matcher';
import { Observable, empty } from 'rxjs';
import { FormValitions } from '../form-validations';
import { EmailsService } from '../service/emails.service';
import { map, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private emailsService: EmailsService) { }

  get frameworksSelecionados() {
    return this.formulario.get('frameworksSelecionados') as FormArray;
  }

  MINIMO_FRAMEWORKS = 2;

  matcher = new MyErrorStateMatcher();

  formulario: FormGroup;
  estados: Observable<Estado[]>;
  cargos: any[];
  tecnologias: any[];
  newsletterOp: any[];
  frameworks: any[];

  ngOnInit(): void {
    this.estados = this.dropdownService.getEstados();
    this.cargos = this.dropdownService.getCagos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletterOps();
    this.frameworks = this.dropdownService.getFrameworks();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmailExistente.bind(this)]],
      confirmarEmail: [null, FormValitions.equalsTo('email')],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValitions.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        logradouro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologiasSelecionadas: [null],
      newsletter: ['s'],
      termos: [null, [Validators.required, Validators.pattern('true')]],
      frameworksSelecionados: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status do Cep: ', value)),
        switchMap((value: string) => value === 'VALID' ?
          this.cepService.consultaCep(this.formulario.get('endereco.cep').value) : empty())
      ).subscribe((dados: any) => dados ?
        this.populaDadosEndereco(dados) : {});
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworksSelecionados
        .map((valor: boolean, i: number) => valor ? this.frameworks[i] : null)
        .filter((valor: FormControl) => valor !== null)
    });

    if (this.formulario.valid) {
      this.httpClient.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(response => {
          console.log(response);
          // this.resetar();
        },
        (error) => alert(error));
    }
    else {
      this.validarCampos(this.formulario);
    }
  }

  buildFrameworks() {
    const controls = this.frameworks.map(item => new FormControl(false));

    return this.formBuilder.array(controls,
      FormValitions.requiredMinCheckbox(this.MINIMO_FRAMEWORKS));
  }

  validarCampos(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.validarCampos(controle);
      }
    });
  }

  consultaCep() {
    const cepControl = this.formulario.get('endereco.cep');
    const cep = cepControl.value;

    if (cepControl.valid) {
        this.resetaDadosEndereco();

        this.cepService.consultaCep(cep)
          .subscribe((dados: any) => this.populaDadosEndereco(dados));
    }
  }

  populaDadosEndereco(dados: any) {
    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  validarEmailExistente(formControl: FormControl) {
    return this.emailsService.verificaEmailExistente(formControl.value).pipe(
      map(existeEmail => existeEmail ? { emailInvalido: true } : null)
    );
  }

  setarCargo() {
    const cargo = {nome: 'Dev', nivel: 'Pleno', descricao: 'Dev Pl'};
    this.formulario.get('cargo').setValue(cargo);
  }

  setarTecnologia() {
    this.formulario.get('tecnologiasSelecionadas').setValue(['Javascript', 'PHP']);
  }

  compararCargos(obj1: any, obj2: any) {
    return (obj1 && obj2) ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  temErroRequerido(campo: string) {
    return this.formulario.get(campo).hasError('required');
  }

  temErroEmail() {
    return this.formulario.get('email').hasError('email');
  }

  temErroTermos() {
    const control = this.formulario.get('termos');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  temErroMinimoFramework() {
    return this.formulario.get('frameworksSelecionados').invalid;
  }

  temErroCepInvalido() {
    return this.formulario.get('endereco.cep').hasError('cepInvalido');
  }

  temErroCompararEmail() {
    return this.formulario.get('confirmarEmail').hasError('equalsTo');
  }

  resetaDadosEndereco() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  resetar() {
    this.formulario.reset();
    this.formulario.markAsUntouched();
  }
}
