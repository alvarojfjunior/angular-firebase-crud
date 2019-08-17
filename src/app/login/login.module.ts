import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar/entrar.component';
import { CriarComponent } from './criar/criar.component';



@NgModule({
  declarations: [EntrarComponent, CriarComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
