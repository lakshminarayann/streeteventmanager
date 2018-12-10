import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GameListsComponent } from './game-lists.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [GameListsComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    CoreModule
  ]
})
export class GamesModule { }
