import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { ViewmovieComponent } from './viewmovie/viewmovie.component';


const routes: Routes = [
  {path: '', component: MovielistComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'movielist', component: MovielistComponent},
  {path: 'editmovie/:id', component: EditmovieComponent},
  {path: 'viewmovie/:id', component: ViewmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
