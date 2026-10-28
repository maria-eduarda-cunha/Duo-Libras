import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private scoreService: ScoreService
  ) { }
  sidearOpen = false;
  userName = '';
  levelNumber = '';
  levelEmoji = '';
  score = localStorage.getItem('score');
  streak = localStorage.getItem('streak');

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.userName = '@' + user.split('@')[0]
      this.auth.getStreak(user).subscribe({
        error: (err) => {
          console.log(err);
        },
        next: (res: any) => {
          localStorage.setItem('streak', String(res['streak'][1]));
          this.streak = String(res['streak'][1]);
        }
      });
    }
    this.scoreService.score$.subscribe(score => {
      this.score = String(score);
    });
    this.levelNumber = String(Number(localStorage.getItem('level')) + 1);
    this.getLevelInfo();
  }

  getLevelInfo() {
    if (this.levelNumber == '1' || this.levelNumber == '2') {
      this.levelEmoji = '🥉';
    }
    else if (this.levelNumber == '3' || this.levelNumber == '4') {
      this.levelEmoji = '🥈';
    }
    if (this.levelNumber == '5' || this.levelNumber == '6') {
      this.levelEmoji = '🥇';
    }
  }

  toggleSidebar() {
    this.sidearOpen = !this.sidearOpen;
  }

  home(){
    this.router.navigate(['/user/home']);
  }

  creditosReferencias(){
    this.router.navigate(['/user/creditos-referencias']);
  }

  logOut(): void {
    localStorage.clear(); // limpa dados do usuário
    this.router.navigate(['/']); // redireciona para tela inicial/login
  }
}
