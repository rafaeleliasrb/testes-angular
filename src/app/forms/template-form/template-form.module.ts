import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedFormsModule } from '../shared-forms.module';

@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    SharedFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TemplateFormModule { }
