import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, combineReducers } from '@ngrx/store';

import * as AccountActions from './account.actions';
import { AccountEntity } from './account.models';
import { LoginState, initialLoginState, loginReducer } from '../login/store/login.reducer';

export const ACCOUNT_FEATURE_KEY = 'account';

export interface AccountState {
  login: LoginState
}

export interface AccountPartialState {
  readonly [ACCOUNT_FEATURE_KEY]: AccountState;
}

export const initialAccountState: AccountState = {
    // set initial required properties
    login: initialLoginState,
}

export const accountReducer = (state: AccountState = initialAccountState, action: Action) => 
  combineReducers({
    login: loginReducer
  }, initialAccountState)(state, action)
