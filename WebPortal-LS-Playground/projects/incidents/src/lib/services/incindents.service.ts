import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { QueryObject, setTotal } from '@shared';

export interface Incident {
  id: number;
  title: string;
  endpointId: number;
  status: 'open' | 'closed';
  priority: 'low' | 'medium' | 'high';
  created: Date;
}

const data: Incident[] = [
  {
    id: 1,
    title: 'Incident 1',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 2,
    title: 'Incident 2',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 3,
    title: 'Incident 3',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 4,
    title: 'Incident 4',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 5,
    title: 'Incident 5',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 6,
    title: 'Incident 6',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 7,
    title: 'Incident 7',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 8,
    title: 'Incident 8',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 9,
    title: 'Incident 9',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 10,
    title: 'Incident 10',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 11,
    title: 'Incident 11',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 12,
    title: 'Incident 12',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 13,
    title: 'Incident 13',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 14,
    title: 'Incident 14',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 15,
    title: 'Incident 15',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 16,
    title: 'Incident 16',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 17,
    title: 'Incident 17',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 18,
    title: 'Incident 18',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 19,
    title: 'Incident 19',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'low',
    created: new Date(),
  },
  {
    id: 20,
    title: 'Incident 20',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'medium',
    created: new Date(),
  },
  {
    id: 21,
    title: 'Incident 21',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'open',
    priority: 'high',
    created: new Date(),
  },
  {
    id: 22,
    title: 'Incident 22',
    endpointId: Math.floor(Math.random() * 19) + 1,
    status: 'closed',
    priority: 'low',
    created: new Date(),
  },
];

@Injectable({
  providedIn: 'root',
})
export class IncindentsService {
  constructor() {}

  getIncidents(queryParam: QueryObject): Observable<Incident[]> {
    return of(data).pipe(
      map((incidents) =>
        incidents.filter((incident) =>
          incident.title
            .toLowerCase()
            .includes(queryParam.search?.toLowerCase() ?? '')
        )
      ),
      tap((endpoints) => setTotal(endpoints.length)),
      map((endpoints) =>
        endpoints.slice(
          queryParam.skip * queryParam.take,
          queryParam.skip * queryParam.take + queryParam.take
        )
      )
    );
  }
}
