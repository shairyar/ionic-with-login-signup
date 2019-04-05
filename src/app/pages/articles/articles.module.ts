import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlesPage } from './articles.page';

import { articlesRoutes } from './articles-routing.module';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(articlesRoutes)
  ],
  providers: [
    AuthGuardService
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
