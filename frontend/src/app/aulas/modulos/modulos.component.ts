import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Aula {
  id: number;
  titulo: string;
  status: 'bloqueado' | 'completo' | 'atual';
}

interface Quiz {
  id: string;
  status: 'bloqueado' | 'completo' | 'atual';
}

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {
  moduloSelecionado = '';
  aulas: Aula[] = [];
  quiz: Quiz = { id: 'quiz', status: 'bloqueado' };
  aulaAtual = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const rawModulo = this.route.snapshot.paramMap.get('moduloSelecionado') || '';

    const modulosComAcento: Record<string, string> = {
      'saudacoes': 'Saudações',
      'familia': 'Família',
      'lugares': 'Lugares'
    };

    this.moduloSelecionado = modulosComAcento[rawModulo] || this.capitalize(rawModulo.replace(/-/g, ' '));

    // 🔹 Carregar progresso salvo
    this.carregarProgresso();
    this.gerarAulas();
  }

  gerarAulas(): void {
    this.aulas = Array.from({ length: 3 }, (_, i) => {
      const id = i + 1;
      let status: 'bloqueado' | 'completo' | 'atual' = 'bloqueado';
      if (id < this.aulaAtual) status = 'completo';
      else if (id === this.aulaAtual) status = 'atual';
      return { id, titulo: `Aula ${id}`, status };
    });

    const todasCompletas = this.aulas.every(a => a.status === 'completo');
    this.quiz.status = todasCompletas ? 'atual' : 'bloqueado';
  }

  completarAula(id: number): void {
    if (id === this.aulaAtual) {
      this.aulas[id - 1].status = 'completo';
      if (id < this.aulas.length) {
        this.aulaAtual++;
        this.aulas[id].status = 'atual';
      } else {
        this.quiz.status = 'atual';
      }

      // 🔹 Salvar progresso ao completar aula
      this.salvarProgresso();
    }
  }

  private salvarProgresso(): void {
    localStorage.setItem(`progresso_${this.moduloSelecionado}`, this.aulaAtual.toString());
  }

  private carregarProgresso(): void {
    const salvo = localStorage.getItem(`progresso_${this.moduloSelecionado}`);
    this.aulaAtual = salvo ? parseInt(salvo, 10) : 1;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
