import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Module, ModuleService, getRootNavigationItems } from '@shared';
import { getChildNavigationItems } from '../../../../projects/shared/src/lib/stores/NavigationStore/navigationStore.queries';
import { AsyncPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, MatIcon],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
private moduleService = inject(ModuleService);

  getIcon = (module: Module | undefined) => this.moduleService.getIcon(module);
  getNavigationRoorItems = () => getRootNavigationItems();
  getNavigationChildItems = (id: number) => getChildNavigationItems(id);
}
