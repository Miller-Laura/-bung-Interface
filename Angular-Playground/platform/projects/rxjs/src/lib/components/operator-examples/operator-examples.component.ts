import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { combineLatest, concat, filter, map, merge, of, toArray } from 'rxjs';
import { LoadDataService } from '../../services/load-data.service';
import { People } from '../../models/people';
import { Film } from '../../models/film';
import { Planets } from '../../models/planets';

@Component({
  selector: 'lib-operator-examples',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './operator-examples.component.html',
  styleUrl: './operator-examples.component.scss',
})
export class OperatorExamplesComponent {
  originalElements: number[] = [1, 2, 3, 4, 5, 6];
  resultElements: number[] = [1, 2, 3, 4, 5, 6];
  numbers = of(1, 2, 3, 4, 5, 6);
  strings = of('a', 'b', 'c', 'd', 'e', 'f');
  multiplier: number = 0;
  loadDataService = inject(LoadDataService);
  people: People[] = [];
  films: Film[] = [];
  planets: Planets[] = [];
  showExamples = true;
  pagePeople = 1;
  pagePlanets = 1;

  mapExample() {
    this.numbers
      .pipe(
        map((value) => value * this.multiplier),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }

  filterEvenExample() {
    this.numbers
      .pipe(
        filter((value) => value % 2 === 0),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }

  filterOddExample() {
    this.numbers
      .pipe(
        filter((value) => value % 2 !== 0),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }

  loadPeople() {
    this.loadDataService
      .getPeople(this.pagePeople)
      .subscribe((people) => (this.people = people));
  }

  loadFilms() {
    this.loadDataService.getFilms().subscribe((films) => (this.films = films));
  }

  loadPlanets() {
    this.loadDataService
      .getPlanets(this.pagePlanets)
      .subscribe((planets) => (this.planets = planets));
  }

  combineLatestExample() {
    combineLatest([
      this.loadDataService.getPeople(this.pagePeople),
      this.loadDataService.getFilms(),
      this.loadDataService.getPlanets(this.pagePlanets),
    ]).subscribe(([people, films, planets]) => {
      this.people = people;
      this.films = films;
      this.planets = planets;
    });
  }

  concatExample() {
    concat(
      this.loadDataService.getPeople(this.pagePeople),
      this.loadDataService.getFilms(),
      this.loadDataService.getPlanets(this.pagePlanets)
    ).subscribe((data) => this.setData(data));
  }

  mergeExample() {
    merge(
      this.loadDataService.getPeople(this.pagePeople),
      this.loadDataService.getFilms(),
      this.loadDataService.getPlanets(this.pagePlanets)
    ).subscribe((data) => this.setData(data));
  }

  clearData() {
    this.people = [];
    this.films = [];
    this.planets = [];
  }

  private setData(data: People[] | Film[] | Planets[]) {
    if (data.length > 0) {
      const firstItem = data[0];
      if ('type' in firstItem) {
        switch (firstItem.type) {
          case 'people':
            this.people = data as People[];
            break;
          case 'films':
            this.films = data as Film[];
            break;
          case 'planets':
            this.planets = data as Planets[];
            break;
          default:
            break;
        }
      }
    }
  }
}
