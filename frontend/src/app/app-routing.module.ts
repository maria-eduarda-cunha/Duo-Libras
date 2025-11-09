import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './member/login/login.component';
import { UserComponent } from './user/user/user.component';
import { SignInComponent } from './member/sign-in/sign-in.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'criar-conta', component: SignInComponent },
    { path: 'user', component: UserComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
