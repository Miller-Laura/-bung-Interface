import { Routes } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
import { SignalsTiyComponent } from './signals-tiy/signals-tiy.component';
import { SignalsTiyLoesungComponent } from './signals-tiy-loesung/signals-tiy-loesung.component';

export const routes: Routes = [
  { path: 'signals', component: SignalsComponent },
  { path: 'signals-tiy', component: SignalsTiyComponent },
  { path: 'signals-tiy-loesung', component: SignalsTiyLoesungComponent },
  { path: '**', redirectTo: 'signals' },
];
