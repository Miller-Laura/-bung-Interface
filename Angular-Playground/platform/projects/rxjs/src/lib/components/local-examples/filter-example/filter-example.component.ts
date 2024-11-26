import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { filter, of, toArray } from 'rxjs';

@Component({
  selector: 'lib-filter-example',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './filter-example.component.html',
  styleUrl: './filter-example.component.scss',
})
export class FilterExampleComponent {
  originalElements: number[] = [1, 2, 3, 4, 5, 6];
  resultElements: number[] = [1, 2, 3, 4, 5, 6];
  numbers = of(1, 2, 3, 4, 5, 6);

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
