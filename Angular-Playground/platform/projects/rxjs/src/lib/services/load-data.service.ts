import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { People } from '../models/people';
import { map, Observable } from 'rxjs';
import { ResponseWrapper } from '../models/responseWrapper';
import { Film } from '../models/film';
import { Planets } from '../models/planets';

@Injectable({
  providedIn: 'root',
})
export class LoadDataService {
  swapiPeopleUrl = 'https://swapi.dev/api/people/?page=';
  swapiFilmsUrl = 'https://swapi.dev/api/films/';
  swapiPlanetsUrl = 'https://swapi.dev/api/planets/?page=';

  private httpClient = inject(HttpClient);

  getPeople(page?: number): Observable<People[]> {
    const url = page ? this.swapiPeopleUrl + page : this.swapiPeopleUrl + '1';
    return this.httpClient
      .get<ResponseWrapper<People>>(url)
      .pipe(
        map((response) =>
          response.results.map((person) => ({ ...person, type: 'people' }))
        )
      );
  }

  getFilms(filmId?: number): Observable<Film[]> {
    return this.httpClient
      .get<ResponseWrapper<Film>>(
        `${this.swapiFilmsUrl}${filmId ? filmId : ''}`
      )
      .pipe(
        map((response) =>
          response.results.map((film) => ({ ...film, type: 'films' }))
        )
      );
  }

  getPlanets(page?: number): Observable<Planets[]> {
    const url = page ? this.swapiPlanetsUrl + page : this.swapiPlanetsUrl + '1';
    return this.httpClient
      .get<ResponseWrapper<Planets>>(url)
      .pipe(
        map((response) =>
          response.results.map((planet) => ({ ...planet, type: 'planets' }))
        )
      );
  }
}
