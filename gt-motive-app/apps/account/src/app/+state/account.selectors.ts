import { createFeatureSelector } from '@ngrx/store';
import {
  ACCOUNT_FEATURE_KEY,
  AccountState,
} from './account.reducer';

// Lookup the 'Account' feature state managed by NgRx
export const selectAccountState =
  createFeatureSelector<AccountState>(ACCOUNT_FEATURE_KEY);
