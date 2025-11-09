import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos/modulos.component';
import { AulasComponent } from './aulas/aulas.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: ':moduloSelecionado', component: ModulosComponent },
  { path: ':moduloSelecionado/aula', component: AulasComponent },
  { path: ':moduloSelecionado/quiz', component: QuizComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule {}