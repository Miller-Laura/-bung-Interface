import { Routes } from '@angular/router';
import { SignalsTiyComponent } from './lib/components/signals-tiy/signals-tiy.component';
import { SignalsComponent } from './lib/components/signals/signals.component';
import { SignalsTiyLoesungComponent } from './lib/components/signals-tiy-loesung/signals-tiy-loesung.component';

export const SIGNALS_ROUTES: Routes = [
  { path: '', component: SignalsComponent },
  { path: 'tiy', component: SignalsTiyComponent },
  { path: 'tiy-loesung', component: SignalsTiyLoesungComponent },
];
