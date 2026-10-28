import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditosReferenciasComponent } from './creditos-referencias/creditos-referencias.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'creditos-referencias', component: CreditosReferenciasComponent },
    { path: 'modulos', loadChildren: () => import('./aulas/aulas.module').then(m => m.AulasModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
