import { Component, inject, OnDestroy } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnDestroy {
  heroes: Hero[] = [];
  heroService = inject(HeroService);
  heroSubscription?: Subscription;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSubscription = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  ngOnDestroy(): void {
    this.heroSubscription?.unsubscribe();
  }
}
