import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//(IMPORTACAO MANUAL)
import { FormsModule }   from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { EntrarComponent } from './login/entrar/entrar.component';
import { CriarComponent } from './login/criar/criar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    NavbarComponent,
    EntrarComponent,
    CriarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //(MANUAL) DEIXA TUDO PRONTO
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
