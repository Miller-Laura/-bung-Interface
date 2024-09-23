import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadChildren: () => import('@signalsLib').then((m) => m.SIGNALS_ROUTES),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('@rxjsLib').then((m) => m.RXJS_ROUTES),
  },
  { path: '**', redirectTo: 'signals' },
];
