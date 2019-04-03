import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArticlesPage } from './articles.page';

const routes: Routes = [
  { path: '', component: ArticlesPage },
  { path: 'show', loadChildren: '../articles/show/show.module#ShowPageModule' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticlesPage]
})
export class ArticlesPageModule {}
