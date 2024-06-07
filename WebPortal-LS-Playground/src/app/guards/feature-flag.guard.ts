import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getFeatures } from '@shared';
import { map } from 'rxjs';

export const featureFlagGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return getFeatures().pipe(
    map((flags) => {
      if (flags.includes(route.data['requiredFeatureFlag'])) {
        return true;
      } else {
        return router.createUrlTree([route.data['featureFlagRedirect']]);
      }
    })
  );
};
