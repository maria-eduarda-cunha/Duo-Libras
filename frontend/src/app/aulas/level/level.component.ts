import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AulaService } from '../services/aula.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  modulo!: string;
  aulaIndex!: number;
  perguntaTexto = '';
  respostas: { texto: string; correta: boolean }[] = [];
  respostaCorreta: boolean | null = null;
  carregando = true;
  gif = '';

  constructor(
    private route: ActivatedRoute,
    private aulaService: AulaService
  ) { }

  ngOnInit(): void {
    this.modulo = this.route.snapshot.queryParamMap.get('modulo') || 'alfabeto';
    this.aulaIndex = Number(this.route.snapshot.paramMap.get('id')) || 1;

    this.getAulaAtual();
  }

  getAulaAtual(): void {
    this.aulaService.getAula(this.modulo, this.aulaIndex).subscribe({
      next: (aula: any) => {
        if (!aula) {
          console.error('Aula não encontrada!');
          this.carregando = false;
          return;
        }

        const perguntaKey = `pergunta${this.aulaIndex}`;
        const respostasKey = `respostas${this.aulaIndex}`;
        const gifKey = `gif${this.aulaIndex}`;

        this.perguntaTexto = aula[perguntaKey] || '';
        const respostasObj = aula[respostasKey] || {};
        this.respostas = Object.entries(respostasObj).map(([texto, correta]) => ({
          texto,
          correta: Boolean(correta)
        }));

        this.gif = aula[gifKey] || '';
        this.carregando = false;
      },
      error: (err: any) => {
        console.error('Erro ao carregar módulo:', err);
        this.carregando = false;
      }
    });
  }


  verificarResposta(resposta: { texto: string; correta: boolean }): void {
    this.respostaCorreta = resposta.correta;
  }
}
