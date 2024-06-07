import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  MatColumnResizeFlex,
  MatResizable,
} from '@angular/material-experimental/column-resize';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  TableContainerComponent,
  AttachToStoreDirective,
  getQueryParams,
} from '@shared';
import { Incident, IncindentsService } from '../../services/incindents.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { auditTime, switchMap } from 'rxjs';

@Component({
  selector: 'lib-overview',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    DatePipe,
    AttachToStoreDirective,
    TableContainerComponent,
    MatColumnResizeFlex,
    MatResizable,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  private endpointsService = inject(IncindentsService);
  dataSource: MatTableDataSource<any> = new MatTableDataSource<Incident>();

  constructor() {
    getQueryParams()
      .pipe(
        auditTime(0),
        takeUntilDestroyed(),
        switchMap(this.endpointsService.getIncidents)
      )
      .subscribe({
        next: (incidents) => {
          this.dataSource.data = incidents;
        },
      });
  }
}
