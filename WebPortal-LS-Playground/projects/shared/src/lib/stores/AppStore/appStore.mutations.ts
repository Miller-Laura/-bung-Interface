import { appStore } from './appStore';

export function setFeatureFlags(featureFlags: string[]) {
  appStore.update((state) => ({ ...state, featureFlags: featureFlags }));
}

export function activateDirectQuery(icon: string) {
  appStore.update((state) => ({
    ...state,
    queryProviders: { mode: 'direct', icon },
  }));
}

export function activateGlobalQuery() {
  appStore.update((state) => ({
    ...state,
    queryProviders: { mode: 'global' },
  }));
}
