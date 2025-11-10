import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  moduloSelecionado: string = '';
  perguntas: any[] = [];
  carregando = true;
  perguntaAtual = 0;
  opcaoSelecionada: string | null = null;
  respostaCorreta: boolean | null = null;
  textoBotao: string = 'Próxima';
  fimQuiz: boolean = false;
  pontuacao: number = 0;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.moduloSelecionado = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    this.carregarQuiz();
  }

  carregarQuiz(): void {
    this.quizService.getQuizByModulo(this.moduloSelecionado).subscribe({
      next: (data) => {
        this.perguntas = this.formatarPerguntas(data);
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar quiz:', err);
        this.carregando = false;
      }
    });
  }

  formatarPerguntas(data: any): any[] {
    const perguntas: any[] = [];
    let index = 1;

    while (data[`pergunta${index}`]) {
      perguntas.push({
        texto: data[`pergunta${index}`],
        gif: data[`gif${index}`],
        respostas: Object.entries(data[`respostas${index}`] || {}).map(
          ([texto, correta]) => ({ texto, correta: Boolean(correta) })
        )
      });
      index++;
    }

    return perguntas;
  }

  selecionarOpcao(resposta: any) {
    this.opcaoSelecionada = resposta.texto;
    this.respostaCorreta = resposta.correta;

    if (this.respostaCorreta) {
      this.pontuacao++;
    }

    // Atualiza texto do botão
    if (this.perguntaAtual === this.perguntas.length - 1) {
      this.textoBotao = 'Concluir';
    } else {
      this.textoBotao = 'Próxima';
    }
  }

  proximaPergunta() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
      this.respostaCorreta = null;
      this.opcaoSelecionada = null;
    } else {
      this.fimQuiz = true;
    }
  }
}
