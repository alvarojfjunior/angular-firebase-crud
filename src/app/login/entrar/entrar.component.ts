import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/shared/login.service';
import { Login } from '../shared/login';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  login: Login;

  constructor(private loginService: LoginService) { 
    this.login = new Login(); 
  }

  ngOnInit() {
  }

  logOn() {
    this.loginService.login(this.login.email, this.login.senha);
  }

}
