import { select } from '@ngneat/elf';
import { QueryObject, queryResultStore, queryStore } from './queryStore';
import { Observable } from 'rxjs';

export const getTotal = () =>
  queryResultStore.pipe(select((item) => item.total));

export const getQueryValue = () =>
  queryStore.pipe(select((item) => item.global.search));

export const getQueryParams = () =>
  queryStore.pipe(
    select(
      (item) =>
        ({
          orderBy: item.pagedQuery.get('Default')?.orderBy,
          orderDirection: item.pagedQuery.get('Default')?.orderDirection,
          skip: item.pagedQuery.get('Default')?.skip,
          take: item.global.take,
          search: item.global.search,
        } as QueryObject)
    )
  );

export const getPaging = () =>
  queryStore.pipe(
    select((item) => ({
      skip: item.pagedQuery.get('Default')?.skip ?? 0,
      take: item.global.take ?? 25,
    }))
  );

export const getOrderBy = () =>
  queryStore.pipe(
    select((item) => ({
      orderBy: item.pagedQuery.get('Default')?.orderBy ?? '',
      direction: item.pagedQuery.get('Default')?.orderDirection ?? '',
    }))
  );
