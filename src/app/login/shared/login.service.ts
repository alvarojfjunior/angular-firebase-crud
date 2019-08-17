import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";


// OBSERVABLE É UM TIPO QUE ESPERA MUDANÇAS PARA TROCAR DE ESTADO
// JÁ A PROMISE PROCESSA UM ÚNICO EVENTO

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: Observable<firebase.User>;
  route: ActivatedRouteSnapshot;
  
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.user = angularFireAuth.authState;
    
  }

  public login(email, senha) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email, senha).then((user) => {
        localStorage['token'] = user.credential;
        console.log('Logado!');
        this.router.navigate(['/listContato']);
      })
        .catch((error) => {
          console.log('Usuário ou senha inválido!');
        });
    })
      .catch((error) => {
        console.log('Erro 2');
      });
  }
  
  public logout() {
    this.router.navigate(['/entrar']);
    console.log('Logoffing...');
    this.angularFireAuth.auth.signOut();
  }


}
