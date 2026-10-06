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


  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
    const rawModulo = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    console.log(rawModulo)
    const modulosComAcento: Record<string, string> = {
      'saudações': 'saudacoes',
      'família': 'familia'
    };

    // formata o nome do módulo com acento
    this.moduloSelecionado = modulosComAcento[rawModulo] || this.capitalize(rawModulo.replace(/-/g, ' '));
    console.log(this.moduloSelecionado)
    this.carregarQuiz();
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  carregarQuiz(): void {
    this.quizService.getQuizByModulo(this.moduloSelecionado.toLowerCase()).subscribe({
      next: (data) => {
        console.log(data)
        this.perguntas = this.formatarPerguntas(data);
        console.log(this.perguntas)
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar quiz:', err);
        this.carregando = false;
      }
    });
  }

  formatarPerguntas(data: any): any[] {
    // return (data.quiz || []).map((item: any) => ({
    //   texto: item.pergunta,
    //   gif: item.gif,
    //   tipo: item.tipo,
    //   respostas: Object.entries(item.respostas || {}).map(
    //     ([key, value]) => ({
    //       key,
    //       value
    //     })
    //   )
    // }));
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

        // Respostas originais
        respostas,

        // Letras embaralhadas
        respostasKeys: this.embaralhar([...respostas]),

        // GIFs embaralhados
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
    }
  }

  // ---------- TELA: ALTERNATIVA ----------
  opcaoSelecionada: string | null = null;

  selecionarOpcao(resp: any): void {
    this.respostaSelecionada = resp;
    console.log(resp.value)
    if (resp.value === true) {

      this.respostaCorreta = true;

      return;
    }

    this.respostaCorreta = false;

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

      this.respostasCorretas.push(this.letraSelecionada.key);
      this.gifsCorretos.push(gif.key);

      this.letraSelecionada = null;
      this.gifSelecionado = null;

      return;
    }

    this.respostaCorreta = false;

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
