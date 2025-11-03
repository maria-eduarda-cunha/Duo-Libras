import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})

export class LevelComponent {
  constructor(
    private route: ActivatedRoute,
    private quiz: QuizService
  ) {}

modulo!: string;          // Ex: "lugares"
  perguntaIndex!: number;   // Ex: 1, 2, ...
  perguntaTexto = '';
  respostas: { texto: string; correta: boolean }[] = [];
  respostaCorreta: boolean | null = null;
  carregando = true;

  ngOnInit(): void {
    this.modulo = this.route.snapshot.queryParamMap.get('modulo') || 'lugares';
    this.perguntaIndex = Number(this.route.snapshot.paramMap.get('id')) || 1;
    this.getQuizByModulo();
  }

  getQuizByModulo(): void {
    

    // this.quiz.getQuiz(this.modulo).subscribe({
    //   next: (data) => {
    //     const perguntaKey = `pergunta${this.perguntaIndex}`;
    //     const respostasKey = `respostas${this.perguntaIndex}`;

    //     this.perguntaTexto = data[perguntaKey];
    //     const respostasObj = data[respostasKey];

    //     if (respostasObj) {
    //       this.respostas = Object.entries(respostasObj).map(([texto, correta]) => ({
    //         texto,
    //         correta
    //       }));
    //     }

    //     this.carregando = false;
    //   },
    //   error: (err) => {
    //     console.error('Erro ao carregar módulo:', err);
    //     this.carregando = false;
    //   }
    // });
  }

  verificarResposta(resposta: { texto: string; correta: boolean }): void {
    this.respostaCorreta = resposta.correta;
  }
}
