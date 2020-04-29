import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { CursosRoutingModule } from './cursos-routing.module';
import { ConfirmModelComponent } from './confirm-model/confirm-model.component';

const materialModules = [
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatDialogModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AlertModalComponent,
    CursosFormComponent,
    CursosListaComponent,
    ConfirmModelComponent
  ],
  imports: [
    CommonModule,
    materialModules,
    ReactiveFormsModule,
    UnsubscribeRxjsModule,
    CursosRoutingModule,
  ],
  exports: [
    materialModules
  ]
})
export class CursosModule { }
