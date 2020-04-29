import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(public dialog: MatDialog) { }

  openDialogErro(mensagemErro: string) {
    this.openDialog('Erro', mensagemErro);
  }

  openDialogSucesso(mensagemSucesso: string) {
    this.openDialog('Sucesso', mensagemSucesso);
  }

  private openDialog(tipo: string, texto: string): void {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      width: '250px',
      data: {titulo: tipo, mensagem: texto}
    });

    dialogRef.afterClosed()
    .pipe(take(1))
    .subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
