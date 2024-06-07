import { Routes } from '@angular/router';
import { ForbiddenErrorComponent } from './error/forbidden-error/forbidden-error.component';
import { GeneralErrorComponent } from './error/general-error/general-error.component';
import { NotFoundErrorComponent } from './error/not-found-error/not-found-error.component';
import { ServerErrorComponent } from './error/server-error/server-error.component';
import { FeatureNotEnabledComponent } from './error/feature-not-enabled/feature-not-enabled.component';

export const defaultRoutes: Routes = [
  { path: '404', component: NotFoundErrorComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '403', component: ForbiddenErrorComponent },
  { path: 'error', component: GeneralErrorComponent },
  { path: 'featureNotEnabled', component: FeatureNotEnabledComponent },
  { path: '**', redirectTo: '/404' },
];
