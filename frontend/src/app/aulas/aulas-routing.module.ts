import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos/modulos.component';
import { LevelComponent } from './level/level.component';

const routes: Routes = [
  { path: 'modulos/:moduloSelecionado', component: ModulosComponent },
  { path: 'level/:id', component: LevelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule {}
