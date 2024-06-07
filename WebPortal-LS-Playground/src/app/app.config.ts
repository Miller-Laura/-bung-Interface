import { APP_INITIALIZER, ApplicationConfig, Injector } from '@angular/core';
import { Route, provideRouter } from '@angular/router';

import { defaultRoutes } from './app.routes.default';
import { routes as generated } from './app.routes.generated';
import { devTools } from '@ngneat/elf-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BreadcumpMenuComponent } from './components/breadcump-menu/breadcump-menu.component';
import { IQueryProvider, QUERY_PROVIDERS } from '@shared';
import { FeatureFlagsService } from './services/feature-flags.service';
import 'map.prototype.tojson';

export function initElfDevTools(actions: any) {
  return () => {
    devTools({
      name: 'WebPortal',
      actionsDispatcher: actions,
    });
  };
}

export async function queryProvidersFactory(
  injector: Injector,
  featureFlagsService: FeatureFlagsService
): Promise<IQueryProvider[]> {
  const services: IQueryProvider[] = [];

  if (featureFlagsService.isEnabled('Endpoints')) {
    const { QueryProvider } = await import('@endpoints');
    const service = injector.get(QueryProvider);
    services.push(service);
  }

  if (featureFlagsService.isEnabled('Incidents')) {
    const { QueryProvider } = await import('@incidents');
    const service = injector.get(QueryProvider);
    services.push(service);
  }

  return services;
}

export const provideQueryProviders = () => ({
  provide: QUERY_PROVIDERS,
  useFactory: queryProvidersFactory,
  deps: [Injector, FeatureFlagsService],
});

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initElfDevTools,
      multi: true,
    },
    provideQueryProviders(),
    provideRouter([...addViewContainer(generated), ...defaultRoutes]),
    provideAnimationsAsync(),
  ],
};

function addViewContainer(items: Route[]): Route[] {
  return items.map((route) => ({
    ...route,
    component: BreadcumpMenuComponent,
  }));
}
