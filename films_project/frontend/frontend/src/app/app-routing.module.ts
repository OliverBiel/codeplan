import { FilmsCreateComponent } from './components/films/films-create/films-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FilmsCrudComponent } from './views/films-crud/films-crud.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"films",
  component: FilmsCrudComponent
},
{
  path:"films/create",
  component:FilmsCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
