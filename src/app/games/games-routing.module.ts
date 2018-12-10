import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameListsComponent } from './game-lists.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'games', component: GameListsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
