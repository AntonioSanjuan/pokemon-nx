import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AccountActions from './account.actions';
import { AccountEntity } from './account.models';

export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountState extends EntityState<AccountEntity> {
  selectedId?: string | number; // which Account record has been selected
  loaded: boolean; // has the Account list been loaded
  error?: string | null; // last known error (if any)
}

export interface AccountPartialState {
  readonly [ACCOUNT_FEATURE_KEY]: AccountState;
}

export const accountAdapter: EntityAdapter<AccountEntity> =
  createEntityAdapter<AccountEntity>();

export const initialAccountState: AccountState = accountAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const reducer = createReducer(
  initialAccountState,
  on(AccountActions.initAccount, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AccountActions.loadAccountSuccess, (state, { account }) =>
    accountAdapter.setAll(account, { ...state, loaded: true })
  ),
  on(AccountActions.loadAccountFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function accountReducer(
  state: AccountState | undefined,
  action: Action
) {
  return reducer(state, action);
}
