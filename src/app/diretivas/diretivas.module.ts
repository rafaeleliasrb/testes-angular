import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivaElvisComponent } from './diretiva-elvis/diretiva-elvis.component';
import { DiretivaNgContentComponent } from './diretiva-ng-content/diretiva-ng-content.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';

@NgModule({
  declarations: [
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgStyleComponent,
    DiretivaElvisComponent,
    DiretivaNgContentComponent,
    DiretivasCustomizadasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DiretivasModule { }
