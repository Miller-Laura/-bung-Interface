import { createStore } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { Module } from '../../services/module.service';

export interface NavigationItem {
  id: number;
  module?: Module;
  parentId?: number;
  type: 'Container' | 'Link';
  name: string;
  route?: string;
}

export const navigationStore = createStore(
  { name: 'navigation' },
  withEntities<NavigationItem>({
    initialValue: [
      { id: 1, name: 'MXDR', type: 'Container' },
      {
        id: 2,
        name: 'Policy-Management',
        type: 'Container',
      },
      {
        id: 3,
        name: 'MDM',
        type: 'Container',
      },
      {
        id: 4,
        name: 'Mail-Protection',
        type: 'Container',
      },
      {
        id: 5,
        name: 'Verwaltung',
        type: 'Container',
      },
      {
        id: 6,
        name: 'Dashboard',
        module: 'Dashboard',
        parentId: 1,
        type: 'Link',
        route: '/dashboard',
      },
      {
        id: 7,
        name: 'Endpoints',
        module: 'Endpoint',
        parentId: 1,
        type: 'Link',
        route: '/endpoints',
      },
      {
        id: 8,
        name: 'Incidents',
        module: 'Incident',
        parentId: 1,
        type: 'Link',
        route: '/incidents',
      },
      {
        id: 9,
        name: 'Handlungsempfehlungen',
        module: 'Recommendedactions',
        parentId: 1,
        type: 'Link',
        route: '/recommendeedactions',
      },
      {
        id: 10,
        name: 'Protokolle',
        module: 'Protocol',
        parentId: 1,
        type: 'Link',
        route: '/protocols',
      },
      {
        id: 11,
        name: 'Benachrichtigungen',
        module: 'Notification',
        parentId: 1,
        type: 'Link',
        route: '/events',
      },
      {
        id: 12,
        name: 'Benutzer',
        module: 'User',
        parentId: 5,
        type: 'Link',
        route: '/users',
      },
      {
        id: 13,
        name: 'Rollen',
        module: 'Role',
        parentId: 5,
        type: 'Link',
        route: '/roles',
      },
      {
        id: 14,
        name: 'Organisations',
        module: 'Organization',
        parentId: 5,
        type: 'Link',
        route: '/organizations',
      },
    ],
    idKey: 'id',
  })
);
