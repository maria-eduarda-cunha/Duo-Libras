import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './member/login/login.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './member/sign-in/sign-in.component';
import { ModulosComponent } from './aulas/modulos/modulos.component';
import { LevelComponent } from './aulas/level/level.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'criar-conta', component: SignInComponent },
  {
    path: 'aulas',
    loadChildren: () =>
      import('./aulas/aulas.module').then(m => m.AulasModule),
  },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
