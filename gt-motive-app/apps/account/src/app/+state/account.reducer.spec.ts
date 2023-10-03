import { Action } from '@ngrx/store';

import * as AccountActions from './account.actions';
import { AccountEntity } from './account.models';
import {
  AccountState,
  initialAccountState,
  accountReducer,
} from './account.reducer';

describe('Account Reducer', () => {
  const createAccountEntity = (id: string, name = ''): AccountEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Account actions', () => {
    it('loadAccountSuccess should return the list of known Account', () => {
      const account = [
        createAccountEntity('PRODUCT-AAA'),
        createAccountEntity('PRODUCT-zzz'),
      ];
      const action = AccountActions.loadAccountSuccess({ account });

      const result: AccountState = accountReducer(initialAccountState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = accountReducer(initialAccountState, action);

      expect(result).toBe(initialAccountState);
    });
  });
});
