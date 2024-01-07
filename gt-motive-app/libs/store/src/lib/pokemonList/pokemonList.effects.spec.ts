import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { PokemonListEffects } from './pokemonList.effects';
import { PokemonStateMock } from '@gt-motive-app/test';
import { PokemonListService } from './pokemonList.service';
import { getNextPokemonListPageRequest, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess } from './pokemonList.actions';
import { selectPokemonQuery } from './pokemonList.selectors';
import { PokemonQuery, PokemonResponseDto, PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('PokemonListEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonListEffects;
  let pokemonListService: PokemonListService;
  let store:  MockStore;;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonListEffects,
        PokemonListService,
        AuthService,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: PokemonStateMock
        }),
      ],
    });

    effects = TestBed.inject(PokemonListEffects);
    store = TestBed.inject(MockStore),
    pokemonListService = TestBed.inject(PokemonListService)
  });

  describe('getNextPokemonListPageRequest$', () => {
    const pokemonQuery = {
      currentPage: 100,
      pageSize: 69
    } as PokemonQuery;

    beforeEach(() => {
      store.overrideSelector(selectPokemonQuery, pokemonQuery);
    })
    describe('when getNextPokemonListPageRequest is dispatched', () => {
      describe('when pokemonListService.getPokemonPage throws error', () => {
        const errorloginResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(errorloginResp)
          actions = of(getNextPokemonListPageRequest())
        })

        it('should call getNextPokemonListPageRequestError', async () => {
          const result = await firstValueFrom(effects.getNextPokemonListPageRequest$)
          expect(result).toEqual(getNextPokemonListPageRequestError())
        })
      })

      describe('when pokemonListService.getPokemonPage success', () => {
        const successResp: Partial<PokemonsResponseDto> = { count: 100, results: [{} as PokemonResponseDto]} 
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(of(successResp as PokemonsResponseDto))
          actions = of(getNextPokemonListPageRequest())
        })

        it('should call getNextPokemonListPageRequestSuccess', async () => {
          const result = await firstValueFrom(effects.getNextPokemonListPageRequest$)
          expect(result).toEqual(getNextPokemonListPageRequestSuccess({ pokemons: successResp as PokemonsResponseDto}))
        })
      })
    })
  });
});
