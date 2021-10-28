import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HarryPotterListComponent } from './harry-potter-list/harry-potter-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HarryPotterListComponent},
  {path: 'detail/:actor',
          component: CharacterDetailsComponent,
          },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
