import { createStore, withProps } from '@ngneat/elf';
import { Module } from '../../services/module.service';

export interface QueryObject {
  orderBy?: string;
  orderDirection?: string;
  skip: number;
  take: number;
  search?: string;
}

interface QueryResult {
  total: number;
}

interface GloablQuery {
  search?: string;
  take: number;
}
interface QueryProps {
  global: GloablQuery;
  pagedQuery: Map<Module | 'Default', PagedQueryObject>;
}

interface PagedQueryObject {
  orderBy?: string;
  orderDirection?: string;
  skip: number;
}

export const queryStore = createStore(
  { name: 'query' },
  withProps<QueryProps>({
    global: { take: 25 },
    pagedQuery: new Map<Module | 'Default', PagedQueryObject>([
      ['Default', { skip: 0 }],
    ]),
  })
);

export const queryResultStore = createStore(
  { name: 'queryResult' },
  withProps<QueryResult>({
    total: 0,
  })
);
