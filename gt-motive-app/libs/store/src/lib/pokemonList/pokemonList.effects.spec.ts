import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'
import { PokemonListEffects } from './pokemonList.effects';

describe('PokemonListEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonListEffects;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PokemonListEffects,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: {}
          // initialState: initialPokemonState
        }),
      ],
    });

    effects = TestBed.inject(PokemonListEffects);
    store = TestBed.inject(Store)
  });
});
