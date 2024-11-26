import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, of, toArray } from 'rxjs';

@Component({
  selector: 'lib-map-example',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './map-example.component.html',
  styleUrl: './map-example.component.scss',
})
export class MapExampleComponent {
  originalElements: number[] = [1, 2, 3, 4, 5, 6];
  resultElements: number[] = [1, 2, 3, 4, 5, 6];
  numbers = of(1, 2, 3, 4, 5, 6);
  multiplier: number = 0;

  mapExample() {
    this.numbers
      .pipe(
        map((value) => value * this.multiplier),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }
}
