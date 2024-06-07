import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-not-found-error',
  standalone: true,
  imports: [MatCard],
  templateUrl: './not-found-error.component.html',
  styleUrl: './not-found-error.component.scss',
})
export class NotFoundErrorComponent {}
