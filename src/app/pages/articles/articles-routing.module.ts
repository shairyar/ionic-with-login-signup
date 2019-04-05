import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { ArticlesPage } from './articles.page';


export const articlesRoutes: Routes = [
  {
    path: 'articles',
    component: ArticlesPage,
    canActivate: [AuthGuardService],
    children: [
      // { path: '', redirectTo: 'show', pathMatch: 'full' },
      { path: 'show', loadChildren: './show/show.module#ShowPageModule' }
    ]
  }
];
