import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocUnsubComponent } from './componentes/poc-unsub.component';
import { PocTakeComponent } from './componentes/poc-take.component';
import { PocTakeUntilComponent } from './componentes/poc-take-until.component';
import { PocAsyncComponent } from './componentes/poc-async.component';
import { PocComponent } from './componentes/poc.component';

const materialModules = [
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    UnsubscribePocComponent,
    PocBaseComponent,
    PocComponent,
    PocUnsubComponent,
    PocTakeComponent,
    PocTakeUntilComponent,
    PocAsyncComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    materialModules
  ]
})
export class UnsubscribeRxjsModule { }
