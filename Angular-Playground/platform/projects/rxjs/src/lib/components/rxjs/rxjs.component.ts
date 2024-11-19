import { Component } from '@angular/core';
import { ApiExamplesComponent } from '../api-examples/api-examples.component';
import { LocalExamplesComponent } from '../local-examples/local-examples.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'lib-rxjs',
  standalone: true,
  imports: [ApiExamplesComponent, LocalExamplesComponent, MatTabsModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent {}
