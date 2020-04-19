import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private cepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.httpClient.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(response => console.log(response));
  }

  consultaCep(cep: string, formulario: NgForm) {
    if (cep != null && cep !== '') {
        this.resetaDadosEndereco(formulario);

        this.cepService.consultaCep(cep)
          .subscribe((dados: any) => this.populaDadosEndereco(dados, formulario));
    }
  }

  populaDadosEndereco(dados: any, formulario: NgForm) {
    console.log(dados);
    formulario.form.patchValue({
      endereco: {
        complemento: dados.complemento,
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosEndereco(formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        logradouro: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
