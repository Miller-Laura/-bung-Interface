import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Observable, of } from 'rxjs';

export let heroes: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    return of(heroes.find((hero) => hero.id === id));
  }

  deleteHeroById(id: number): void {
    heroes = heroes.filter((hero) => hero.id !== id);
  }
}
