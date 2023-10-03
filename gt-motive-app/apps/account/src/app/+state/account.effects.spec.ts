import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AccountActions from './account.actions';
import { AccountEffects } from './account.effects';

describe('AccountEffects', () => {
  let actions: Observable<Action>;
  let effects: AccountEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AccountEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AccountEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AccountActions.initAccount() });

      const expected = hot('-a-|', {
        a: AccountActions.loadAccountSuccess({ account: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
