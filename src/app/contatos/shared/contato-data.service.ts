import { Injectable } from '@angular/core';

//(MANUAL)
import { BehaviorSubject } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoDataService {
  private contatoSource = new BehaviorSubject({ contato: null, key: '' });
  currentContato = this.contatoSource.asObservable();

  constructor() { }

  // ALTERA ENTRE REGISTROS
  changeContato(contato: Contato, key: string) {
    this.contatoSource.next({ contato: contato, key: key });
  }
}
