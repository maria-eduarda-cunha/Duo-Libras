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
  moduloSelecionado: string = '';

  aulas: Aula[] = [];
  quiz: Quiz = { id: 'quiz', status: 'bloqueado' };

  aulaAtual = 2; // Exemplo: usuário está na Aula 2

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const rawModulo = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    console.log('Raw Modulo:', rawModulo);

    const modulosComAcento: Record<string, string> = {
      'saudacoes': 'Saudações',
      'familia': 'Família',
      'lugares': 'Lugares'
    };

    this.moduloSelecionado = modulosComAcento[rawModulo] || this.capitalize(rawModulo.replace(/-/g, ' '));

    console.log('Modulo Selecionado:', this.moduloSelecionado);
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

    // Quiz desbloqueia quando todas as aulas estiverem completas
    const todasCompletas = this.aulas.every(a => a.status === 'completo');
    this.quiz.status = todasCompletas ? 'atual' : 'bloqueado';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
