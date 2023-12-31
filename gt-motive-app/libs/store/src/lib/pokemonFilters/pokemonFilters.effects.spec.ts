import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'
import { PokemonFiltersEffects } from './pokemonFilters.effects';

describe('PokemonFiltersEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonFiltersEffects;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PokemonFiltersEffects,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: {}
          // initialState: initialPokemonState
        }),
      ],
    });

    effects = TestBed.inject(PokemonFiltersEffects);
    store = TestBed.inject(Store)
  });
});
