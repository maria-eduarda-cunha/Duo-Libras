import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosComponent } from './modulos/modulos.component';
import { AulasComponent } from './aulas/aulas.component';

const routes: Routes = [{
  path: 'modulos/:moduloSelecionado',
    component: ModulosComponent,
    children: [
      { path: 'pergunta/:id', component: AulasComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulasRoutingModule {}