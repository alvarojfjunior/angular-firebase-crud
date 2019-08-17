import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-crud';
  constructor(private router: Router) {
    // Se o usuário estiver logado.
    if (true) {
      this.router.navigate(['/entrar']);
    } else {
      this.router.navigate(['/listContato']);
    }
    
  }
  
  

}

