import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterPageModule' },
  { path: 'articles', loadChildren: './pages/articles/articles.module#ArticlesPageModule', canActivate: [AuthGuardService] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
