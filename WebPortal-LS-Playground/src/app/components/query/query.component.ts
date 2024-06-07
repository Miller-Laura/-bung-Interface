import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import {
  QUERY_PROVIDERS,
  QueryResult,
  clearSearchValue,
  getQueryMode,
  getQueryValue,
  setSearchValue,
} from '@shared';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  forkJoin,
  map,
} from 'rxjs';
import {
  MatAutocompleteModule,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionSelectionChange } from '@angular/material/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterState,
} from '@angular/router';

@Component({
  selector: 'app-query',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIcon,
    AsyncPipe,
    MatChipsModule,
  ],
  templateUrl: './query.component.html',
  styleUrl: './query.component.scss',
})
export class QueryComponent implements OnDestroy {
  @ViewChild('autoTrigger') autoTrigger!: MatAutocompleteTrigger;
  private queryProviders = inject(QUERY_PROVIDERS);
  private router = inject(Router);
  private mode: 'direct' | 'global' = 'global';
  private subscriptions: Subscription[] = [];
  private searchInputSubject$ = new Subject<string>();
  private searchString$ = getQueryValue();

  icon = signal<string | undefined>(undefined);
  searchValue = signal<string>('');
  queryResults = signal<QueryResult[]>([]);

  constructor() {
    this.searchInputSubject$
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((value) => {
        switch (this.mode) {
          case 'direct':
            this.directQuery(value);
            break;
          case 'global':
            this.globalQuery(value);
            break;
        }
      });

    this.searchString$.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.searchValue.set(value ?? '');
    });

    getQueryMode()
      .pipe(takeUntilDestroyed())
      .subscribe((queryModeObject) => {
        this.mode = queryModeObject.mode;
        this.icon.set(queryModeObject.icon);

        if (this.mode === 'direct') {
          this.queryResults.set([]);
        }
      });
  }

  onQueryChange(value?: string | undefined) {
    this.searchValue.set(value ?? '');

    if ((!value || value === '') && this.mode === 'direct') {
      clearSearchValue();
      return;
    }

    this.searchInputSubject$.next(value ?? '');
  }

  async globalQuery(value: string) {
    if (value) {
      this.subscriptions.push(
        forkJoin(
          (await this.queryProviders).map((provider) => provider.query(value))
        )
          .pipe(
            map((results) => results.sort((a, b) => (a.name > b.name ? 1 : -1)))
          )
          .subscribe({ next: (result) => this.queryResults.set(result) })
      );
    }
  }

  directQuery(value: string) {
    setSearchValue(value);
  }

  displayFn(): string {
    return this.searchValue();
  }

  onSelected(event: MatOptionSelectionChange<QueryResult>) {
    this.directQuery(this.searchValue());
    this.autoTrigger.closePanel();
    this.router.navigate([event.source.value.route]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
