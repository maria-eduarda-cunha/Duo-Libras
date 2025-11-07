// frontend/src/app/aulas/aulas/aulas.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AulaService } from 'src/app/services/aulas.service';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
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
    this.getAulasByModulo();
  }

  getAulasByModulo(): void {
    this.aulaService.getAulasByModulo(this.modulo).subscribe({
      next: (data: any[]) => {
        const aula = data.find((a: any) => a.aula === this.aulaIndex);

        if (!aula) {
          console.error('Aula não encontrada!');
          this.carregando = false;
          return;
        }

        this.gif = aula.gif;
        this.perguntaTexto = aula.pergunta1;

        const respostasObj = aula.respostas1 || {};
        this.respostas = Object.entries(respostasObj).map(([texto, correta]) => ({
          texto,
          correta: Boolean(correta)
        }));


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