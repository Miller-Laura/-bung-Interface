import { Injectable } from '@angular/core';
import { AppStore } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  isEnabled(arg0: string): boolean {
    return (
      AppStore.getValue().featureFlags.find((flag) => flag === arg0) !==
      undefined
    );
  }

  constructor() {}
}
