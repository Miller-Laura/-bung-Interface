import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

export interface Fruit {
  name: string;
  colour: string;
}

@Injectable({
  providedIn: 'root',
})
export class DeclarativeProgrammingService {
  private fruits$ = new BehaviorSubject<Array<Fruit>>([
    { name: 'Apple', colour: 'Red' },
    { name: 'Banana', colour: 'Yellow' },
    { name: 'Orange', colour: 'Orange' },
    { name: 'Grapes', colour: 'Purple' },
    { name: 'Pineapple', colour: 'Brown' },
    { name: 'Strawberry', colour: 'Red' },
    { name: 'Watermelon', colour: 'Green' },
    { name: 'Blueberry', colour: 'Blue' },
  ]);

  public getFruits(): Observable<Array<Fruit>> {
    return this.fruits$.asObservable();
  }
}
