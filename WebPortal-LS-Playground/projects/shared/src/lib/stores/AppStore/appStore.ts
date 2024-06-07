import { createStore, withProps } from '@ngneat/elf';

export interface AppProps {
  featureFlags: string[];
  queryProviders: {
    mode: 'direct' | 'global';
    icon?: string;
  };
}

export const appStore = createStore(
  { name: 'app' },
  withProps<AppProps>({
    queryProviders: { mode: 'global' },
    featureFlags: ['Dashboard', 'Endpoints', 'Incidents'],
  })
);
