import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ACCOUNT_FEATURE_KEY,
  AccountState,
  accountAdapter,
} from './account.reducer';

// Lookup the 'Account' feature state managed by NgRx
export const selectAccountState =
  createFeatureSelector<AccountState>(ACCOUNT_FEATURE_KEY);

const { selectAll, selectEntities } = accountAdapter.getSelectors();

export const selectAccountLoaded = createSelector(
  selectAccountState,
  (state: AccountState) => state.loaded
);

export const selectAccountError = createSelector(
  selectAccountState,
  (state: AccountState) => state.error
);

export const selectAllAccount = createSelector(
  selectAccountState,
  (state: AccountState) => selectAll(state)
);

export const selectAccountEntities = createSelector(
  selectAccountState,
  (state: AccountState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectAccountState,
  (state: AccountState) => state.selectedId
);

export const selectEntity = createSelector(
  selectAccountEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
