import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private router: Router) {}
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logOut(): void {
    localStorage.clear(); // limpa dados do usuário
    this.router.navigate(['/']); // redireciona para tela inicial/login
  }
}
