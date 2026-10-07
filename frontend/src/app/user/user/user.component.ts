import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private router: Router,
    private scoreService: ScoreService
  ) {}
  menuOpen = false;
  score = localStorage.getItem('score');

  ngOnInit(): void {
    this.scoreService.score$.subscribe(score => {
      this.score = String(score);
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  logOut(): void {
    localStorage.clear(); // limpa dados do usuário
    this.router.navigate(['/']); // redireciona para tela inicial/login
  }
}
