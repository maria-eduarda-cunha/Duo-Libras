import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  moduloSelecionado = '';
  gifSrc = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.moduloSelecionado = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    this.gifSrc = `/assets/aula-${this.moduloSelecionado}.mp4`;
    console.log(this.gifSrc)
  }

  selecionarOpcao(opcao: any){

  }

   verificarResposta(){

  }
}
