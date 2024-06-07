import { InjectionToken, Provider, inject } from '@angular/core';
import { FeatureFlagsService } from '@app/services/feature-flags.service';
import { Observable } from 'rxjs';

export const QueryProvidersToken = 'QueryProviders';

export interface QueryResult {
  icon: string;
  name: string;
  count: number;
  route: string;
}

export interface IQueryProvider {
  query(value: string): Observable<QueryResult>;
}

export const QUERY_PROVIDERS = new InjectionToken<Promise<IQueryProvider[]>>(
  QueryProvidersToken
);
