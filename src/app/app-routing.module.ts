import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
