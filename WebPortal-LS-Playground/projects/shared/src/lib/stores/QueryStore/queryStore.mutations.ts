import { QueryObject, queryResultStore, queryStore } from './queryStore';
import { select, setProps } from '@ngneat/elf';

export function setSearchValue(search: string) {
  queryStore.update(
    setProps((state) => ({ global: { ...state.global, search: search } })),
    setProps((state) => {
      state.pagedQuery.set('Default', {
        ...state.pagedQuery.get('Default'),
        skip: 0,
      });
      return state;
    })
  );
}

export function setOrderBy(orderBy: string, direction: string) {
  queryStore.update(
    setProps((state) => {
      state.pagedQuery.set('Default', {
        ...(state.pagedQuery.get('Default') ?? { skip: 0 }),
        orderBy: orderBy,
        orderDirection: direction,
      });
      return state;
    })
  );
}

export function setPaging(skip: number, take: number) {
  queryStore.update(
    setProps((state) => ({
      global: {
        ...state.global,
        take: take,
      },
    })),
    setProps((state) => {
      state.pagedQuery.set('Default', {
        ...(state.pagedQuery.get('Default') ?? { skip: 0 }),
        skip: skip,
      });
      return state;
    })
  );
}

export function setTotal(total: number) {
  queryResultStore.update(
    setProps((state) => ({
      total: total,
    }))
  );
}

export function clearSearchValue() {
  queryStore.update(
    setProps((state) => {
      const { search, ...rest } = state.global;
      state.global = rest;
      return state;
    })
  );
}
