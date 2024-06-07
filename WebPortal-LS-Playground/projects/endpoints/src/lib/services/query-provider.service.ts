import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IQueryProvider, QueryObject, QueryResult } from '@shared';
import { EndpointsService } from './endpoints.service';
import { icon } from '../libInfo';

@Injectable({
  providedIn: 'root',
})
export class QueryProviderService implements IQueryProvider {
  private service = inject(EndpointsService);

  constructor() {}

  public query(value: string): Observable<QueryResult> {
    const queryParam: QueryObject = { skip: 0, take: 99, search: value };

    return this.service.getEndpoints(queryParam).pipe(
      map((items) => ({
        icon: icon,
        name: 'Endpoints',
        count: items.length,
        route: 'endpoints',
      }))
    );
  }
}
