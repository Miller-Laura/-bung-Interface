import { featureFlagGuard } from "@app/guards/feature-flag.guard";

export const routes = [{
        path: 'dashboard',
        loadChildren: () => import('../../projects/dashboard/src/routes').then((m) => m.ROUTES),
        canActivate: [featureFlagGuard],
        data: {
            featureFlagRedirect: 'featureNotEnabled',
            requiredFeatureFlag: 'Dashboard',
            module: 'dashboard'
        }
    },
    {
        path: 'endpoints',
        loadChildren: () => import('../../projects/endpoints/src/routes').then((m) => m.ROUTES),
        canActivate: [featureFlagGuard],
        data: {
            featureFlagRedirect: 'featureNotEnabled',
            requiredFeatureFlag: 'Endpoints',
            module: 'endpoints'
        }
    },
    {
        path: 'incidents',
        loadChildren: () => import('../../projects/incidents/src/routes').then((m) => m.ROUTES),
        canActivate: [featureFlagGuard],
        data: {
            featureFlagRedirect: 'featureNotEnabled',
            requiredFeatureFlag: 'Incidents',
            module: 'incidents'
        }
    }
];
