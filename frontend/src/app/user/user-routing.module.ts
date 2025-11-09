import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from '../member/sign-in/sign-in.component';
import { ModulosComponent } from './aulas/modulos/modulos.component';
import { UserComponent } from './user/user.component';
import { AulasComponent } from './aulas/aulas/aulas.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'modulos/:moduloSelecionado', component: ModulosComponent },{ path: 'aulas', loadChildren: () => import('./aulas/aulas.module').then(m => m.AulasModule) },
    { path: ':aulaSelecionada', component: AulasComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
