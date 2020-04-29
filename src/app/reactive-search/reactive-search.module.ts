import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { ReactiveSearchComponent } from './reactive-search/reactive-search.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [
    ReactiveSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule,
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class ReactiveSearchModule { }
