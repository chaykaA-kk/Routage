import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from '../cat';
import { CATS } from '../mock-cats';
import * as _ from 'lodash';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  cat: Cat = { id: 0, name: '', breed: '', country: '' }; // Replace with actual default values if applicable


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
if (idFromRoute) {
  const id = +idFromRoute;
  // Proceed with using the id
}

  }

  getCatById(id: number): void {
    let index = _.findIndex(CATS, (cat: Cat) => cat.id === id);
    this.cat = CATS[index];
    console.log(this.cat);
  }
}
