import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataFormComponent } from './data-form.component';
import { SharedFormsModule } from '../shared-forms.module';

@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedFormsModule,
    HttpClientModule,
  ]
})
export class DataFormModule { }
