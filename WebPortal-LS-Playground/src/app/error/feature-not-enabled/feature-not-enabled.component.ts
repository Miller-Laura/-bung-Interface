import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-feature-not-enabled',
  standalone: true,
  imports: [MatCard],
  templateUrl: './feature-not-enabled.component.html',
  styleUrl: './feature-not-enabled.component.scss',
})
export class FeatureNotEnabledComponent {}
