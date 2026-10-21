import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication.service';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(
    private router: Router,
    private auth: AuthenticationService,
    private dialog: MatDialog
  ) { }

  streak: number = 0;
  level: number = 0;
  last_access_date: string = '';


  ngOnInit(): void {
    const user = localStorage.getItem('user')

    if (user) {
      this.auth.getStreak(user).subscribe({
        error: (err) => {
          console.log(err);
        },
        next: (res: any) => {
          this.last_access_date = res['streak'][0];
          this.streak = res['streak'][1];
          this.registerDailyAccess();
        }
      });
      this.auth.getLevel(user).subscribe({
        error: (err) => {
          console.log(err);
        },
        next: (res: any) => {
          localStorage.setItem('level', res['level'])
          this.level = res['level'];
        }
      });
    }
  }

  private getToday(): string {
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(new Date());

    const values: Record<string, string> = {};

    for (const part of parts) {
      if (part.type !== 'literal') {
        values[part.type] = part.value;
      }
    }

    return `${values['year']}-${values['month']}-${values['day']}`;
  }

  registerDailyAccess(): void {
    const today = this.getToday();

    const yesterdayDate = new Date(`${today}T12:00:00`);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    const yesterday = [
      yesterdayDate.getFullYear(),
      String(yesterdayDate.getMonth() + 1).padStart(2, '0'),
      String(yesterdayDate.getDate()).padStart(2, '0')
    ].join('-');

    if (this.last_access_date === today) {
      localStorage.setItem('streak', String(this.streak));
      return;
    }
    else if (this.last_access_date === yesterday) {
      this.streak += 1;
      localStorage.setItem('streak', String(this.streak));

      this.dialog.open(AlertComponent, {
        width: '350px',
        data: {
          title: '🔥 Streak mantido!',
          msg: `Parabéns! Você está há ${this.streak} dias seguidos acessando a plataforma!`
        }
      });
    } else {
      this.streak = 0;
    }

    const user = localStorage.getItem('user')

    if (user) {
      this.auth.updateStreak(user, today, this.streak).subscribe({
        error: (err) => {
          console.log(err);
        },
        next: (res: any) => {
          this.streak = res['streak'][0];
          this.last_access_date = res['streak'][1];
        }
      });
    }
  }
}