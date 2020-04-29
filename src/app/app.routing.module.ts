import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { DataFormComponent } from './forms/data-form/data-form.component';
import { CursosListaComponent } from './http/cursos-lista/cursos-lista.component';
import { UnsubscribePocComponent } from './http/unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    /*canActivate: [AuthGuard],*/
    canActivateChild: [CursosGuard]/*,
    canLoad: [AuthGuard]*/
  },
  {path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)/*,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]*/
  },
  {path: 'templateForm', component: TemplateFormComponent},
  {path: 'dataForm', component: DataFormComponent},
  {path: 'home', component: HomeComponent/*,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]*/
  },
  {path: 'http/cursos',
    loadChildren: () => import('./http/cursos.module').then(m => m.CursosModule)
  },
  {path: 'http/rxjs-poc', component: UnsubscribePocComponent},
  {path: 'upload',
    loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  },
  {path: 'reactive-search',
    loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
