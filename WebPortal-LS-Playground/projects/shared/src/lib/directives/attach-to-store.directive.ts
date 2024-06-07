import {
  Directive,
  ElementRef,
  HostListener,
  ViewChild,
  viewChild,
} from '@angular/core';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { queryStore } from '../stores/QueryStore/queryStore';
import { setOrderBy } from '../stores/QueryStore/queryStore.mutations';
import { getOrderBy } from '../stores/QueryStore/queryStore.queries';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: 'mat-table[libAttachToStore]',
  standalone: true,
})
export class AttachToStoreDirective {
  constructor(private matSort: MatSort) {
    getOrderBy()
      .pipe(takeUntilDestroyed())
      .subscribe((orderBy) => {
        this.matSort!.active = orderBy.orderBy ?? '';
        this.matSort!.direction = (orderBy.direction as SortDirection) ?? '';
      });
  }

  @HostListener('matSortChange', ['$event'])
  onSortChange(sortState: Sort) {
    setOrderBy(sortState.active, sortState.direction);
  }
}
