import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-forbidden-error',
  standalone: true,
  imports: [MatCard],
  templateUrl: './forbidden-error.component.html',
  styleUrl: './forbidden-error.component.scss',
})
export class ForbiddenErrorComponent {}
