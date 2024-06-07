import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'login', loadChildren: () => import('./componenti/componenti.module').then(m => m.ComponentiModule) },
   { path: 'register', loadChildren: () => import('./componenti/register/register.module').then(m => m.RegisterModule) },
   { path: 'login', loadChildren: () => import('./componenti/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
