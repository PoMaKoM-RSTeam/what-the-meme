import { GamePageComponent } from './pages/game-page/game-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './pages/create-page/create-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'join', component: JoinPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'room/:id', component: GamePageComponent },
  { path: '**',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
