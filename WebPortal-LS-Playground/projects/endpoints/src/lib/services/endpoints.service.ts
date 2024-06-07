import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { QueryObject, setTotal } from '@shared';

export interface Endpoint {
  id: string;
  agentId: string;
  name: string;
  status: string;
  version: string;
  lastupdate: Date;
  tags: string[];
  organizationPath: string;
}

const data: Endpoint[] = [
  {
    id: '1',
    agentId: 'agent1',
    name: 'Endpoint 1',
    status: 'Active',
    version: '1.0',
    lastupdate: new Date(),
    tags: ['tag1', 'tag2'],
    organizationPath: 'org1',
  },
  {
    id: '2',
    agentId: 'agent2',
    name: 'Endpoint 2',
    status: 'Inactive',
    version: '2.0',
    lastupdate: new Date(),
    tags: ['tag3', 'tag4'],
    organizationPath: 'org2',
  },
  {
    id: '3',
    agentId: 'agent3',
    name: 'Endpoint 3',
    status: 'Active',
    version: '3.0',
    lastupdate: new Date(),
    tags: ['tag5', 'tag6'],
    organizationPath: 'org3',
  },
  {
    id: '4',
    agentId: 'agent4',
    name: 'Endpoint 4',
    status: 'Inactive',
    version: '4.0',
    lastupdate: new Date(),
    tags: ['tag7', 'tag8'],
    organizationPath: 'org4',
  },
  {
    id: '7',
    agentId: 'agent7',
    name: 'Endpoint 7',
    status: 'Active',
    version: '7.0',
    lastupdate: new Date(),
    tags: ['tag13', 'tag14'],
    organizationPath: 'org7',
  },
  {
    id: '8',
    agentId: 'agent8',
    name: 'Endpoint 8',
    status: 'Inactive',
    version: '8.0',
    lastupdate: new Date(),
    tags: ['tag15', 'tag16'],
    organizationPath: 'org8',
  },
  {
    id: '9',
    agentId: 'agent9',
    name: 'Endpoint 9',
    status: 'Active',
    version: '9.0',
    lastupdate: new Date(),
    tags: ['tag17', 'tag18'],
    organizationPath: 'org9',
  },
  {
    id: '10',
    agentId: 'agent10',
    name: 'Endpoint 10',
    status: 'Inactive',
    version: '10.0',
    lastupdate: new Date(),
    tags: ['tag19', 'tag20'],
    organizationPath: 'org10',
  },
  {
    id: '11',
    agentId: 'agent11',
    name: 'Endpoint 11',
    status: 'Active',
    version: '11.0',
    lastupdate: new Date(),
    tags: ['tag21', 'tag22'],
    organizationPath: 'org11',
  },
  {
    id: '12',
    agentId: 'agent12',
    name: 'Endpoint 12',
    status: 'Inactive',
    version: '12.0',
    lastupdate: new Date(),
    tags: ['tag23', 'tag24'],
    organizationPath: 'org12',
  },
  {
    id: '13',
    agentId: 'agent13',
    name: 'Endpoint 13',
    status: 'Active',
    version: '13.0',
    lastupdate: new Date(),
    tags: ['tag25', 'tag26'],
    organizationPath: 'org13',
  },
  {
    id: '14',
    agentId: 'agent14',
    name: 'Endpoint 14',
    status: 'Inactive',
    version: '14.0',
    lastupdate: new Date(),
    tags: ['tag27', 'tag28'],
    organizationPath: 'org14',
  },
  {
    id: '15',
    agentId: 'agent15',
    name: 'Endpoint 15',
    status: 'Active',
    version: '15.0',
    lastupdate: new Date(),
    tags: ['tag29', 'tag30'],
    organizationPath: 'org15',
  },
  {
    id: '16',
    agentId: 'agent16',
    name: 'Endpoint 16',
    status: 'Inactive',
    version: '16.0',
    lastupdate: new Date(),
    tags: ['tag31', 'tag32'],
    organizationPath: 'org16',
  },
  {
    id: '17',
    agentId: 'agent17',
    name: 'Endpoint 17',
    status: 'Active',
    version: '17.0',
    lastupdate: new Date(),
    tags: ['tag33', 'tag34'],
    organizationPath: 'org17',
  },
  {
    id: '18',
    agentId: 'agent18',
    name: 'Endpoint 18',
    status: 'Inactive',
    version: '18.0',
    lastupdate: new Date(),
    tags: ['tag35', 'tag36'],
    organizationPath: 'org18',
  },
  {
    id: '19',
    agentId: 'agent19',
    name: 'Endpoint 19',
    status: 'Active',
    version: '19.0',
    lastupdate: new Date(),
    tags: ['tag37', 'tag38'],
    organizationPath: 'org19',
  },
];

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  constructor() {}

  getEndpoints(queryParam: QueryObject): Observable<Endpoint[]> {
    return of(data).pipe(
      map((endpoints) =>
        endpoints.filter((endpoint) =>
          endpoint.name
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
