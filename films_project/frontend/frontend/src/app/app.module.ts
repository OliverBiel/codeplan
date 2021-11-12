import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { FilmsCrudComponent } from './views/films-crud/films-crud.component';
import { FilmsCreateComponent } from './components/films/films-create/films-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { ActorsCrudComponent } from './views/actors-crud/actors-crud.component';
import { StuntmansCrudComponent } from './views/stuntmans-crud/stuntmans-crud.component';
import { ContactsCrudComponent } from './views/contacts-crud/contacts-crud.component';
import { ContactsCreateComponent } from './components/films/contacts-create/contacts-create.component';
import { StuntmansCreateComponent } from './components/films/stuntmans-create/stuntmans-create.component';
import { ActorsCreateComponent } from './components/films/actors-create/actors-create.component';
import { ActorsReadComponent } from './components/films/actors-read/actors-read.component';
import { ActorRead2Component } from './components/films/actor-read2/actor-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ActorUpdateComponent } from './components/films/actor-update/actor-update.component';
import { ActorsDeleteComponent } from './components/films/actors-delete/actors-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FilmsCrudComponent,
    FilmsCreateComponent,
    ActorsCrudComponent,
    StuntmansCrudComponent,
    ContactsCrudComponent,
    ContactsCreateComponent,
    StuntmansCreateComponent,
    ActorsCreateComponent,
    ActorsReadComponent,
    ActorRead2Component,
    ActorUpdateComponent,
    ActorsDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
