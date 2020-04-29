import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Curso } from '../model/curso';

export class DialogData {
  titulo: string;
  texto: string;
  textoOk: string;
  textoCancelar: string;
}

@Component({
  selector: 'app-confirm-model',
  templateUrl: './confirm-model.component.html',
  styleUrls: ['./confirm-model.component.scss']
})
export class ConfirmModelComponent {

  foiRemovido = false;

  constructor(
    public dialogRef: MatDialogRef<ConfirmModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      if (!data.textoOk) {
        data.textoOk = 'Sim';
      }

      if (!data.textoCancelar) {
        data.textoCancelar = 'Não';
      }
    }

  recusarDelecao() {
    this.dialogRef.close(this.foiRemovido);
  }

  aceitarDelecao() {
    this.foiRemovido = true;
    this.dialogRef.close(this.foiRemovido);
  }
}
