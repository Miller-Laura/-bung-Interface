import { Route } from '@angular/router';
import { OverviewComponent } from './lib/pages/overview/overview.component';
import { icon } from './lib/libInfo';

export const ROUTES: Route[] = [
  {
    path: '',
    component: OverviewComponent,
    data: { directQuery: true },
  },
];
