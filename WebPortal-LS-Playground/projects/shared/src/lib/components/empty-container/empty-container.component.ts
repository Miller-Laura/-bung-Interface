import { Component, effect, inject, input } from '@angular/core';
import { ContainerBase } from '../../abstractions/ContainerBase';
import { ModuleService, Module } from '../../services/module.service';
import {
  activateDirectQuery,
  activateGlobalQuery,
} from '../../stores/AppStore/appStore.mutations';

@Component({
  selector: 'lib-empty-container',
  standalone: true,
  imports: [],
  templateUrl: './empty-container.component.html',
  styleUrl: './empty-container.component.scss',
})
export class EmptyContainerComponent implements ContainerBase {
  moduleService = inject(ModuleService);
  module = input.required<Module | unknown>();

  constructor() {
    effect(
      () => {
        const module = this.module();
        module
          ? activateDirectQuery(this.moduleService.getIcon(module as Module))
          : activateGlobalQuery();
      },
      { allowSignalWrites: true }
    );
  }
}
