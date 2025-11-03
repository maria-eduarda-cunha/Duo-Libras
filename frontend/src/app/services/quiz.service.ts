import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class QuizService {

  // urlQuiz: string = environment.apiQuiz;

  constructor(private http: HttpClient) { }

  getQuiz(modulo: string) {
    // return this.http.get(this.urlQuiz + modulo).pipe(take(1));
  }
  
}
