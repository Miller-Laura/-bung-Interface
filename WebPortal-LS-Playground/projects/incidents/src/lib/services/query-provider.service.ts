import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IQueryProvider, QueryObject, QueryResult } from '@shared';
import { IncindentsService } from './incindents.service';

@Injectable({
  providedIn: 'root',
})
export class QueryProviderService implements IQueryProvider {
  private service = inject(IncindentsService);

  constructor() {}

  public query(value: string): Observable<QueryResult> {
    const queryParam: QueryObject = { skip: 0, take: 25, search: value };

    return this.service.getIncidents(queryParam).pipe(
      map((items) => ({
        icon: 'shield',
        name: 'Incidents',
        count: items.length,
        route: 'incidents',
      }))
    );
  }
}
