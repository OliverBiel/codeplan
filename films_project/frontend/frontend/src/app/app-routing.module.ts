import { FilmsCreateComponent } from './components/films/films-create/films-create.component';
import { ActorsCreateComponent } from './components/films/actors-create/actors-create.component';
import { StuntmansCreateComponent } from './components/films/stuntmans-create/stuntmans-create.component';
import { ContactsCreateComponent } from './components/films/contacts-create/contacts-create.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FilmsCrudComponent } from './views/films-crud/films-crud.component';

import { ActorsCrudComponent } from './views/actors-crud/actors-crud.component';
import { StuntmansCrudComponent } from './views/stuntmans-crud/stuntmans-crud.component';
import { ContactsCrudComponent } from './views/contacts-crud/contacts-crud.component';
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
},
{
  path:"actors/create",
  component:ActorsCreateComponent
},
{
  path:"stuntmans/create",
  component:StuntmansCreateComponent
},
{
  path:"contacts/create",
  component:ContactsCreateComponent
},
{
  path:"contacts",
  component:ContactsCrudComponent
},
{
  path:"stuntmans",
  component:StuntmansCrudComponent
},
{
  path:"actors",
  component:ActorsCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
