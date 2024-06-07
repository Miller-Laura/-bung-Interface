import { Injectable } from '@angular/core';

export type Module =
  | 'Dashboard'
  | 'Endpoint'
  | 'Incident'
  | 'Recommendedactions'
  | 'Protocol'
  | 'Notification'
  | 'User'
  | 'Role'
  | 'Organization';

const moduleIcon: Record<Module, string> = {
  Dashboard: 'dashboard',
  Endpoint: 'device_hub',
  Incident: 'shield',
  Recommendedactions: 'traffic',
  Protocol: 'assignment',
  Notification: 'circle_notifications',
  User: 'supervised_user_circle',
  Role: 'assignment_ind',
  Organization: 'account_tree',
};

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  getIcon(module: Module | undefined): string {
    if (!module) {
      return 'disabled_by_default';
    }
    return moduleIcon[module];
  }
}
