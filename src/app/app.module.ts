import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TemplateFormModule } from './forms/template-form/template-form.module';
import { DataFormModule } from './forms/data-form/data-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

registerLocaleData(localept, 'pt');

const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ExemplosPipesComponent,
    CamelCasePipe,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    DiretivasModule,
    TemplateFormModule,
    DataFormModule,
    BrowserAnimationsModule,
    materialModules
  ],
  providers: [
    /* {
      provide: LOCALE_ID,
      useValue: 'pt'
    } */
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
