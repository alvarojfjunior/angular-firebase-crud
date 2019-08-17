import { Injectable } from '@angular/core';
import { Contato } from './contato';
import { AngularFireDatabase } from '@angular/fire/database';

//(MANUAL)
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase) { }

  // DENTRO DO SERVICE DE UM COMPONENT OU MODULE HAVERAM OS MÉTODOS DE COMUNICAÇÃO COM O BACKEND

  insert(contato: Contato) {
    //   o nó de operação    comando (push)
    this.db.list('contato').push(contato)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(key: string, contato: Contato) {
    //  nó de operação      comando (update)
    this.db.list('contato').update(key, contato)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('contato')
      .snapshotChanges()
      .pipe(
        map(changes => {//           retorna a key       e as demais informacoes
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`contato/${key}`).remove();
  }

}
