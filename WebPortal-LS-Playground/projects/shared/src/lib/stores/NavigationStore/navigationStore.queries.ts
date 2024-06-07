import { select } from '@ngneat/elf';
import { navigationStore } from './navigationStore';
import { selectAllEntitiesApply } from '@ngneat/elf-entities';

export const getRootNavigationItems = () =>
  navigationStore.pipe(
    selectAllEntitiesApply({ filterEntity: (entity) => !entity.parentId })
  );

export const getChildNavigationItems = (id: number) =>
  navigationStore.pipe(
    selectAllEntitiesApply({ filterEntity: (entity) => entity.parentId == id })
  );
