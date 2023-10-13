import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AsdasdActions from './asdasd.actions';
import { AsdasdEffects } from './asdasd.effects';

describe('AsdasdEffects', () => {
  let actions: Observable<Action>;
  let effects: AsdasdEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        AsdasdEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AsdasdEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AsdasdActions.initAsdasd() });

      const expected = hot('-a-|', {
        a: AsdasdActions.loadAsdasdSuccess({ asdasd: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
