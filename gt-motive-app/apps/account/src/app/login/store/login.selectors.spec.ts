import { AsdasdEntity } from './asdasd.models';
import {
  asdasdAdapter,
  AsdasdPartialState,
  initialAsdasdState,
} from './asdasd.reducer';
import * as AsdasdSelectors from './asdasd.selectors';

describe('Asdasd Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAsdasdId = (it: AsdasdEntity) => it.id;
  const createAsdasdEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AsdasdEntity);

  let state: AsdasdPartialState;

  beforeEach(() => {
    state = {
      asdasd: asdasdAdapter.setAll(
        [
          createAsdasdEntity('PRODUCT-AAA'),
          createAsdasdEntity('PRODUCT-BBB'),
          createAsdasdEntity('PRODUCT-CCC'),
        ],
        {
          ...initialAsdasdState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Asdasd Selectors', () => {
    it('selectAllAsdasd() should return the list of Asdasd', () => {
      const results = AsdasdSelectors.selectAllAsdasd(state);
      const selId = getAsdasdId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = AsdasdSelectors.selectEntity(state) as AsdasdEntity;
      const selId = getAsdasdId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectAsdasdLoaded() should return the current "loaded" status', () => {
      const result = AsdasdSelectors.selectAsdasdLoaded(state);

      expect(result).toBe(true);
    });

    it('selectAsdasdError() should return the current "error" state', () => {
      const result = AsdasdSelectors.selectAsdasdError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
