import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoreSubject = new BehaviorSubject<number>(
    Number(localStorage.getItem('score'))
  );

  score$ = this.scoreSubject.asObservable();

  setScore(score: number): void {
    localStorage.setItem('score', String(score));
    this.scoreSubject.next(score);
  }

  getScore(): number {
    return this.scoreSubject.value;
  }
}
