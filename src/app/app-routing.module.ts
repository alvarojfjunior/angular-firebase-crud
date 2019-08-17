import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './login/entrar/entrar.component';
import { CriarComponent } from './login/criar/criar.component';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

const routes: Routes = [
  { path: 'entrar', component: EntrarComponent },
  { path: 'criar', component: CriarComponent },
  { path: 'editContato', component: EditComponent },
  { path: 'listContato', component: ListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
