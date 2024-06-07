import { select } from '@ngneat/elf';
import { appStore } from './appStore';

export const getFeatures = () =>
  appStore.pipe(select((state) => state.featureFlags));

export const getQueryMode = () =>
  appStore.pipe(
    select((state) => ({
      mode: state.queryProviders.mode,
      icon: state.queryProviders.icon,
    }))
  );
