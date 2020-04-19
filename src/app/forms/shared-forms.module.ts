import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

const materialModules = [
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    materialModules
  ],
  exports: [
    FormDebugComponent,
    ErrorMsgComponent,
    materialModules
  ]
})
export class SharedFormsModule { }
