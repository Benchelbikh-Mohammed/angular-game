import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: 'board', component: GameBoardComponent },
      { path: '', redirectTo: 'board', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'game', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
