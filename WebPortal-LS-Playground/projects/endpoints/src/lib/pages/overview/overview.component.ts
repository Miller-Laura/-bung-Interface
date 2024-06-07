import { Component, inject } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {
  MatColumnResizeFlex,
  MatResizable,
} from '@angular/material-experimental/column-resize';
import { AttachToStoreDirective, getQueryParams, setTotal } from '@shared';
import { auditTime, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Endpoint, EndpointsService } from '../../services/endpoints.service';
import { DatePipe } from '@angular/common';
import { TableContainerComponent } from '@shared';

@Component({
  selector: 'lib-overview',
  standalone: true,
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
  imports: [
    MatTableModule,
    MatSortModule,
    DatePipe,
    AttachToStoreDirective,
    TableContainerComponent,
    MatColumnResizeFlex,
    MatResizable,
  ],
})
export class OverviewComponent {
  private endpointsService = inject(EndpointsService);
  dataSource: MatTableDataSource<any> = new MatTableDataSource<Endpoint>();

  constructor() {
    getQueryParams()
      .pipe(
        // auditTime(0),
        takeUntilDestroyed(),
        switchMap(this.endpointsService.getEndpoints)
      )
      .subscribe({
        next: (endpoints) => {
          this.dataSource.data = endpoints;
        },
      });
  }
}
