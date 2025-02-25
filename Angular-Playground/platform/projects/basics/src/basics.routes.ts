import { Routes } from '@angular/router';
import { BasicsComponent } from './lib/components/basics/basics.component';
import { HeroesComponent } from './lib/components/heroes/heroes.component';
import { DashboardComponent } from './lib/components/heroes/dashboard/dashboard.component';
import { MyHeroesComponent } from './lib/components/heroes/my-heroes/my-heroes.component';
import { HeroDetailsComponent } from './lib/components/heroes/hero-details/hero-details.component';

export const BASICS_ROUTES: Routes = [
  { path: '', component: BasicsComponent },
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      { path: 'detail/:id', component: HeroDetailsComponent },
      { path: 'my-heroes', component: MyHeroesComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];
