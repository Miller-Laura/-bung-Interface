import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Hero } from '../../../models/hero';
import { MatButtonModule } from '@angular/material/button';
import { Location, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HeroService } from '../../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-hero-details',
  imports: [
    MatCardModule,
    MatButtonModule,
    UpperCasePipe,
    FormsModule,
    MatInputModule,
  ],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss',
})
export class HeroDetailsComponent implements OnInit, OnDestroy {
  heroService = inject(HeroService);
  activatedRoute = inject(ActivatedRoute);
  location = inject(Location);
  @Input() hero?: Hero;
  heroSubscription?: Subscription;

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroSubscription = this.heroService
      .getHeroById(id)
      .subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.heroSubscription?.unsubscribe();
  }
}
