import { Component } from '@angular/core';
import { EmptyContainerComponent } from '@shared';

@Component({
  selector: 'lib-overview',
  standalone: true,
  imports: [EmptyContainerComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {}
