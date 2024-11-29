import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';  // Import CatDetailsComponent

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/cats', pathMatch: 'full' },  // Redirect to /cats by default
  { path: 'cats', component: CatsComponent },  // Route to the CatsComponent
  { path: 'dogs', component: DogsComponent },  // Route to the DogsComponent
  { path: 'details/:id', component: CatDetailsComponent },  // Route to view cat details by id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure the routes with forRoot
  exports: [RouterModule]  // Export RouterModule to use in AppModule
})
export class AppRoutingModule { }
