import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable} from 'rxjs';
import { PokemonDetailsEffects } from './pokemonDetails.effects';

describe('PokemonDetailsEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonDetailsEffects;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PokemonDetailsEffects,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: {}
          // initialState: initialPokemonState
        }),
      ],
    });

    effects = TestBed.inject(PokemonDetailsEffects);
    store = TestBed.inject(Store)
  });
});
