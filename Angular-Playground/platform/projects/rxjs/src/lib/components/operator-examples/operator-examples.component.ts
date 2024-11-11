import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { filter, map, of, toArray } from 'rxjs';

@Component({
  selector: 'lib-operator-examples',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './operator-examples.component.html',
  styleUrl: './operator-examples.component.scss',
})
export class OperatorExamplesComponent {
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

  filterEvenExample() {
    this.numbers
      .pipe(
        filter((value) => value % 2 === 0),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }

  filterOddExample() {
    this.numbers
      .pipe(
        filter((value) => value % 2 !== 0),
        toArray()
      )
      .subscribe((value) => (this.resultElements = value));
  }
}
