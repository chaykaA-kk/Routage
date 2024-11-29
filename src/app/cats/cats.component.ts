import { Component } from '@angular/core';
import { CATS } from '../mock-cats';  // Import the mock data
import { Cat } from '../cat';  // Import the Cat type

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  cats = CATS;  // Use the mock data for the cats array
  selectedCat !: Cat;  // Add the selectedCat property to hold the selected cat's details

  // Method to get a cat by its ID
  getCatById(id: number): void {
    this.selectedCat = this.cats.find(cat => cat.id === id) || {} as Cat;

    console.log(this.selectedCat);  // Optional: Log the selected cat to the console
  }
}
