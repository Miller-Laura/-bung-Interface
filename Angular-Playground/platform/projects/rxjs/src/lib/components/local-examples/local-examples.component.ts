import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { filter, map, of, toArray } from 'rxjs';
import { MapExampleComponent } from './map-example/map-example.component';
import { FilterExampleComponent } from './filter-example/filter-example.component';

@Component({
  selector: 'lib-local-examples',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MapExampleComponent,
    FilterExampleComponent,
  ],
  templateUrl: './local-examples.component.html',
  styleUrl: './local-examples.component.scss',
})
export class LocalExamplesComponent {
  selectedExample: string = 'map';
}
