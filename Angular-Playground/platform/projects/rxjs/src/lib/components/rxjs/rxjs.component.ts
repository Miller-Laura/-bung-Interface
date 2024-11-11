import { Component } from '@angular/core';
import { OperatorExamplesComponent } from '../operator-examples/operator-examples.component';

@Component({
  selector: 'lib-rxjs',
  standalone: true,
  imports: [OperatorExamplesComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent {}
