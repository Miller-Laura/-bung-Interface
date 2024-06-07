/*
 * Public API Surface of shared
 */

export { QUERY_PROVIDERS } from './lib/queryProvider/queryProvider';
export { QueryObject } from './lib/stores/QueryStore/queryStore';

export { appStore as AppStore, AppProps } from './lib/stores/AppStore/appStore';

export { AttachToStoreDirective } from './lib/directives/attach-to-store.directive';
export { TableContainerComponent } from './lib/components/table-container/table-container.component';
export { EmptyContainerComponent } from './lib/components/empty-container/empty-container.component';

export { NavigationItem } from './lib/stores/NavigationStore/navigationStore';
export { getRootNavigationItems } from './lib/stores/NavigationStore/navigationStore.queries';

export { IQueryProvider, QueryResult } from './lib/queryProvider/queryProvider';
export {
  getQueryValue,
  getQueryParams,
  getOrderBy,
  getPaging,
  getTotal,
} from './lib/stores/QueryStore/queryStore.queries';

export {
  getFeatures,
  getQueryMode,
} from './lib/stores/AppStore/appStore.queries';

export {
  activateDirectQuery,
  activateGlobalQuery,
} from './lib/stores/AppStore/appStore.mutations';

export {
  clearSearchValue,
  setSearchValue,
  setOrderBy,
  setPaging,
  setTotal,
} from './lib/stores/QueryStore/queryStore.mutations';

export { ModuleService, Module } from './lib/services/module.service';
