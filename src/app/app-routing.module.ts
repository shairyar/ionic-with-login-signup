import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/authentication/register/register.module#RegisterPageModule' },
  { path: 'index', loadChildren: './pages/articles/index/index.module#IndexPageModule' },
  { path: 'show', loadChildren: './pages/articles/show/show.module#ShowPageModule' },
  { path: 'create', loadChildren: './pages/articles/create/create.module#CreatePageModule' },
  { path: 'update', loadChildren: './pages/articles/update/update.module#UpdatePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
