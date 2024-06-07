import { Component, effect, inject, input, model, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {
  Module,
  ModuleService,
  getPaging,
  setPaging,
  activateDirectQuery,
  activateGlobalQuery,
  getTotal,
} from '@shared';
import { ContainerBase } from '../../abstractions/ContainerBase';

@Component({
  selector: 'lib-table-container',
  standalone: true,
  imports: [MatPaginator],
  templateUrl: './table-container.component.html',
  styleUrl: './table-container.component.scss',
})
export class TableContainerComponent implements ContainerBase {
  moduleService = inject(ModuleService);
  module = input.required<Module | unknown>();

  paging = signal<{ skip: number; take: number; total: number }>({
    skip: 0,
    take: 25,
    total: 0,
  });

  constructor() {
    getPaging()
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.paging.update((obj) => ({
          ...obj,
          skip: result.skip,
          take: result.take,
        }));
      });

    getTotal()
      .pipe(takeUntilDestroyed())
      .subscribe((total) => {
        this.paging.update((item) => ({ ...item, total: total }));
      });

    effect(
      () => {
        const module = this.module();
        module
          ? activateDirectQuery(this.moduleService.getIcon(module as Module))
          : activateGlobalQuery();
      },
      { allowSignalWrites: true }
    );
  }

  onPageChanged(event: PageEvent) {
    setPaging(event.pageIndex, event.pageSize);
  }
}
