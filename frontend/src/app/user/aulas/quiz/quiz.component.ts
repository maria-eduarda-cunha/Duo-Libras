import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ScoreService } from '../../../services/score.service';

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
  textoBotao: string = 'Próxima';
  fimQuiz: boolean = false;
  pontuacao: number = 0;

  respostaSelecionada: any = null;
  respostaCorreta: boolean | null = null;
  letraSelecionada: any = null;
  gifSelecionado: any = null;
  respostasCorretas: string[] = [];
  respostasErradas: string[] = [];
  gifsCorretos: string[] = [];
  gifsErrados: string[] = [];

  // ---- Score ---
  score: number = 0;
  acertos: number = 0;
  erros: number = 0;
  sequenciaAcertos: number = 0;
  maiorSequencia: number = 0;
  // --------------


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private auth: AuthenticationService,
    private scoreService: ScoreService
  ) { }

  ngOnInit(): void {
    const rawModulo = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    const modulosComAcento: Record<string, string> = {
      'saudações': 'saudacoes',
      'família': 'familia'
    };

    // formata o nome do módulo com acento
    this.moduloSelecionado = modulosComAcento[rawModulo] || this.capitalize(rawModulo.replace(/-/g, ' '));
    this.carregarQuiz();
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  carregarQuiz(): void {
    this.quizService.getQuizByModulo(this.moduloSelecionado.toLowerCase()).subscribe({
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
    return (data.quiz || []).map((item: any) => {

      const respostas = Object.entries(item.respostas || {})
        .map(([key, value]) => ({
          key,
          value
        }));

      return {
        texto: item.pergunta,
        gif: item.gif,
        tipo: item.tipo,
        respostas,
        respostasKeys: this.embaralhar([...respostas]),
        respostasValues: this.embaralhar([...respostas])
      };
    });
  }

  embaralhar<T>(array: T[]): T[] {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  avancarQuiz() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
      this.respostaCorreta = null;
      this.opcaoSelecionada = null;
      this.sequenciaSelecionada = [];
      this.letraSelecionada = null;
      this.gifSelecionado = null;
      this.respostasCorretas = [];
      this.respostasErradas = [];
      this.gifsCorretos = [];
      this.gifsErrados = [];
    } else {
      this.fimQuiz = true;
      this.atualizarResultado();
    }
  }

  // ---------- SCORE ----------
  registrarAcerto(): void {
    this.acertos++;
    this.sequenciaAcertos++;

    // Atualiza maior sequência
    if (this.sequenciaAcertos > this.maiorSequencia) {
      this.maiorSequencia = this.sequenciaAcertos;
    }

    // Pontos base
    const pontosBase = Number(localStorage.getItem('score'));

    // Bônus pela sequência
    const bonus = (this.sequenciaAcertos - 1) * 2;

    this.score += pontosBase + bonus;
  }

  registrarErro(): void {
    this.erros++;

    // Quebra a sequência
    this.sequenciaAcertos = 0;

    // Penalidade
    this.score -= 10;

    // Nunca deixa o score negativo
    if (this.score < 0) {
      this.score = 0;
    }
  }

  atualizarResultado(): void {
    const user = localStorage.getItem('user')
    if (user){
      this.auth.updateScore(user, this.score).subscribe({});
    }
    localStorage.setItem('score', String(this.score));
    this.scoreService.setScore(this.score);
  }

  // ---------------------------------------

  // ---------- TELA: ALTERNATIVA ----------
  opcaoSelecionada: string | null = null;

  selecionarOpcao(resp: any): void {
    this.respostaSelecionada = resp;
    if (resp.value === true) {

      this.respostaCorreta = true;
      this.registrarAcerto();

      return;
    }

    this.respostaCorreta = false;
    this.registrarErro();

    setTimeout(() => {
      this.respostaSelecionada = null;
      this.respostaCorreta = null;
    }, 1000);
  }

  // ---------------------------------------

  // ----------- TELA: SEQUÊNCIA -----------
  sequenciaSelecionada: any[] = [];

  selecionarSequencia(resp: any) {
    this.sequenciaSelecionada.push(resp);

    this.respostaCorreta = null;

    if (this.sequenciaSelecionada.length === this.perguntas[this.perguntaAtual].respostas.length) {
      this.verificarSequencia();
    }
  }

  verificarSequencia(): void {

    const respostas = this.perguntas[this.perguntaAtual].respostas;

    // Ainda não selecionou todas
    if (this.sequenciaSelecionada.length < respostas.length) {
      this.respostaCorreta = null;
      return;
    }

    const ordemCorreta = [...respostas]
      .sort((a, b) => a.value - b.value);

    this.respostaCorreta = this.sequenciaSelecionada.every(
      (resp, index) =>
        resp.value === ordemCorreta[index].value
    );

    if (!this.respostaCorreta) {
      this.sequenciaSelecionada = [];
      this.registrarErro();
    }
    else {
      this.registrarAcerto();
    }
  }

  // ---------------------------------------

  // ----------- TELA: CONJUNTO -----------
  selecionarLetra(letra: any): void {
    if (this.respostasCorretas.includes(letra.key)) {
      return;
    }
    this.letraSelecionada = letra;
    this.respostaCorreta = null;
  }


  selecionarGif(gif: any): void {
    if (this.gifsCorretos.includes(gif.key)) {
      return;
    }

    if (!this.letraSelecionada) {
      return;
    }

    this.gifSelecionado = gif;

    if (this.letraSelecionada.key === gif.key) {
      this.respostaCorreta = true;
      this.registrarAcerto();

      this.respostasCorretas.push(this.letraSelecionada.key);
      this.gifsCorretos.push(gif.key);

      this.letraSelecionada = null;
      this.gifSelecionado = null;

      return;
    }

    this.respostaCorreta = false;
    this.registrarErro();

    const letraErrada = this.letraSelecionada.key;
    const gifErrado = gif.key;

    this.respostasErradas.push(letraErrada);
    this.gifsErrados.push(gifErrado);

    this.letraSelecionada = null;
    this.gifSelecionado = null;

    setTimeout(() => {
      this.respostasErradas =
        this.respostasErradas.filter(
          key => key !== letraErrada
        );

      this.gifsErrados =
        this.gifsErrados.filter(
          key => key !== gifErrado
        );

      this.respostaCorreta = null;
    }, 700);
  }
}
