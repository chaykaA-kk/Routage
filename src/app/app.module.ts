import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importer le module de routage

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    DogsComponent,
    CatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Ajouter le module de routage ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
