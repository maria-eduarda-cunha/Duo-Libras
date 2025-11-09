import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {
  moduloSelecionado = '';
  videoSrc = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.moduloSelecionado = this.route.snapshot.paramMap.get('moduloSelecionado') || '';
    this.videoSrc = `/assets/videos/aula-${this.moduloSelecionado}.mp4`;
  }
}
