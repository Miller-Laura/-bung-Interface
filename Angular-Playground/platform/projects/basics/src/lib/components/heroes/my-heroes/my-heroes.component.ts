import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { Subscription } from 'rxjs';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-my-heroes',
  imports: [HeroDetailsComponent, RouterModule],
  templateUrl: './my-heroes.component.html',
  styleUrl: './my-heroes.component.scss',
})
export class MyHeroesComponent implements OnInit, OnDestroy {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  heroService = inject(HeroService);
  heroesSubscription?: Subscription;

  ngOnInit(): void {
    this.heroesSubscription = this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  deleteHeroById(id: number) {
    this.heroService.deleteHeroById(id);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnDestroy(): void {
    this.heroesSubscription?.unsubscribe();
  }
}
