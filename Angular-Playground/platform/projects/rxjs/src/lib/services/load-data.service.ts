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
  swapiPersonUrl = 'https://swapi.dev/api/people/';
  swapiFilmsUrl = 'https://swapi.dev/api/films/';
  swapiPlanetsUrl = 'https://swapi.dev/api/planets/?page=';
  swapiPlanetUrl = 'https://swapi.dev/api/planets/';

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

  getPerson(id: number): Observable<People> {
    return this.httpClient.get<People>(this.swapiPersonUrl + id).pipe(
      map((response) => {
        response.type = 'people';
        return response;
      })
    );
  }

  getFilms(): Observable<Film[]> {
    return this.httpClient
      .get<ResponseWrapper<Film>>(this.swapiFilmsUrl)
      .pipe(
        map((response) =>
          response.results.map((film) => ({ ...film, type: 'films' }))
        )
      );
  }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(this.swapiFilmsUrl + id).pipe(
      map((response) => {
        response.type = 'films';
        return response;
      })
    );
  }

  getFilmByUrl(url: string): Observable<Film> {
    return this.httpClient.get<Film>(url);
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

  getPlanet(id: number): Observable<Planets> {
    return this.httpClient.get<Planets>(this.swapiPlanetUrl + id).pipe(
      map((response) => {
        response.type = 'planets';
        return response;
      })
    );
  }

  getPlanetByUrl(url: string): Observable<Planets> {
    return this.httpClient.get<Planets>(url);
  }
}
