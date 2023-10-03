import { AccountEntity } from './account.models';
import {
  accountAdapter,
  AccountPartialState,
  initialAccountState,
} from './account.reducer';
import * as AccountSelectors from './account.selectors';

describe('Account Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAccountId = (it: AccountEntity) => it.id;
  const createAccountEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AccountEntity);

  let state: AccountPartialState;

  beforeEach(() => {
    state = {
      account: accountAdapter.setAll(
        [
          createAccountEntity('PRODUCT-AAA'),
          createAccountEntity('PRODUCT-BBB'),
          createAccountEntity('PRODUCT-CCC'),
        ],
        {
          ...initialAccountState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Account Selectors', () => {
    it('selectAllAccount() should return the list of Account', () => {
      const results = AccountSelectors.selectAllAccount(state);
      const selId = getAccountId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = AccountSelectors.selectEntity(state) as AccountEntity;
      const selId = getAccountId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectAccountLoaded() should return the current "loaded" status', () => {
      const result = AccountSelectors.selectAccountLoaded(state);

      expect(result).toBe(true);
    });

    it('selectAccountError() should return the current "error" state', () => {
      const result = AccountSelectors.selectAccountError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
