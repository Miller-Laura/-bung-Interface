import { Component, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DeclarativeProgrammingService, Fruit } from '../../declarative-programming.service';
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'lib-endpoints',
  standalone: true,
  imports: [],
  templateUrl: './endpoints.component.html',
  styleUrl: './endpoints.component.scss',
})
export class EndpointsComponent {
  private readonly _searchValue$: BehaviorSubject<string> = new BehaviorSubject('');
  private readonly service = inject(DeclarativeProgrammingService);

  private readonly _fruits$: Observable<Array<Fruit>> = this.service.getFruits()
    .pipe(
      shareReplay(1)
    );
  private readonly _filteredFruits$: Observable<Array<Fruit>> = combineLatest([this._fruits$, this._searchValue$])
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(([fruits, searchValue]) => fruits.filter((fruit) => fruit.name.toLowerCase().includes(searchValue.toLowerCase()))),
    );

  public readonly filteredFruits: Signal<Array<Fruit> | undefined> = toSignal(this._filteredFruits$);

  public setSearchValue(value: string): void {
    this._searchValue$.next(value);
  }
}
