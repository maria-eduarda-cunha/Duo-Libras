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
    return (data.quiz || []).map((item: any) => ({
      texto: item.pergunta,
      gif: item.gif,
      tipo: item.tipo,
      respostas: Object.entries(item.respostas || {}).map(
        ([key, value]) => ({
          key,
          value
        })
      )
    }));
  }

  proximaPergunta() {
    if (this.perguntaAtual < this.perguntas.length - 1) {
      this.perguntaAtual++;
      this.respostaCorreta = null;
      this.opcaoSelecionada = null;
      this.sequenciaSelecionada = [];
    } else {
      this.fimQuiz = true;
    }
  }

  // ---------- TELA: ALTERNATIVA ----------
  opcaoSelecionada: string | null = null;
  respostaCorreta: boolean | null = null;

  selecionarOpcao(resposta: any) {
    this.opcaoSelecionada = resposta.key;

    if (resposta.value == true) {
      this.pontuacao++;
      this.respostaCorreta = true;
    }
    else {
      this.respostaCorreta = false;
    }

    // Atualiza texto do botão
    if (this.perguntaAtual === this.perguntas.length - 1) {
      this.textoBotao = 'Concluir';
    } else {
      this.textoBotao = 'Próxima';
    }
  }
  // ---------------------------------------

  // ----------- TELA: SEQUÊNCIA -----------
  sequenciaSelecionada: any[] = [];

  selecionarSequencia(resp: any) {
    this.sequenciaSelecionada.push(resp);

    // Verifica se todos os itens foram selecionados
    this.respostaCorreta = null;

    // Se selecionou todos os itens verifica a sequencia
    if (this.sequenciaSelecionada.length === this.perguntas[this.perguntaAtual].respostas.length) {
      this.verificarSequencia();
    }
  }

  verificarSequencia() {
    const ordemCorreta = [...this.perguntas[this.perguntaAtual].respostas].sort((a, b) => a.value - b.value);
    this.respostaCorreta = this.sequenciaSelecionada.every(
      (resp, index) => resp.value === ordemCorreta[index].value
    );

    if(!this.respostaCorreta) {
      this.sequenciaSelecionada = [];
    }
  }
  // ---------------------------------------
}
