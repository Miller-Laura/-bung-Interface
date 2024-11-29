import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadDataService } from '../../services/load-data.service';
import { People } from '../../models/people';
import { Film } from '../../models/film';
import { Planets } from '../../models/planets';
import {
  combineLatest,
  concat,
  concatMap,
  delay,
  map,
  merge,
  mergeMap,
  switchMap,
  timer,
} from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-api-examples',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './api-examples.component.html',
  styleUrl: './api-examples.component.scss',
})
export class ApiExamplesComponent {
  loadDataService = inject(LoadDataService);
  people: People[] = [];
  films: Film[] = [];
  planets: Planets[] = [];
  pagePeople = 1;
  pagePlanets = 1;
  personId = 1;
  filmId = 1;
  planetId = 1;

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
    this.clearData();
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
    this.clearData();
    concat(
      this.loadDataService.getPeople(this.pagePeople),
      this.loadDataService.getFilms(),
      this.loadDataService.getPlanets(this.pagePlanets)
    ).subscribe((data) => this.setData(data));
  }

  mergeExample() {
    this.clearData();
    merge(
      this.loadDataService.getPeople(this.pagePeople),
      this.loadDataService.getFilms(),
      this.loadDataService.getPlanets(this.pagePlanets)
    ).subscribe((data) => this.setData(data));
  }
//hier
  mergeMapExample() {
    this.clearData();
    this.loadDataService
      .getPerson(this.personId)
      .pipe(
        mergeMap((people) => {
          this.people.push(people);
          return people.films;
        }),
        mergeMap((film) => this.loadDataService.getFilmByUrl(film))
      )
      .subscribe((film) => this.films.push(film));
  }

  concatMapExample() {
    this.clearData();
    this.loadDataService
      .getFilm(this.filmId)
      .pipe(
        concatMap((film) => {
          this.films.push(film);
          return film.planets;
        }),
        concatMap((planet) => this.loadDataService.getPlanetByUrl(planet))
      )
      .subscribe((planet) => this.planets.push(planet));
  }

  switchMapExample() {
    this.clearData();
    this.loadDataService
      .getPeople(this.pagePeople)
      .pipe(
        switchMap((people) => people),
        concatMap((people) => timer(1000).pipe(map(() => people))),
        switchMap((person) => {
          this.people.push(person);
          return person.films;
        }),
        switchMap((film) => this.loadDataService.getFilmByUrl(film))
      )
      .subscribe((film) => this.films.push(film));
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
