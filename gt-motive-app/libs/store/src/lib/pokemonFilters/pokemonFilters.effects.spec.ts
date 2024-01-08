import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'
import { PokemonFiltersEffects } from './pokemonFilters.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonFiltersService } from './pokemonFilters.service';
import { BasePokemonStateMock } from '@gt-motive-app/test';
import { PokemonType, PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';
import { getpokemonTypesFiltersRequest, getpokemonTypesFiltersRequestError, getpokemonTypesFiltersRequestSuccess } from './pokemonFilters.actions';

describe('PokemonFiltersEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonFiltersEffects;
  let pokemonFilterService: PokemonFiltersService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonFiltersEffects,
        PokemonFiltersService,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: BasePokemonStateMock
        }),
      ],
    });

    effects = TestBed.inject(PokemonFiltersEffects);
    store = TestBed.inject(MockStore)
    pokemonFilterService = TestBed.inject(PokemonFiltersService)

  });

  describe('getpokemonTypesFiltersRequest$', () => {
    describe('when getpokemonTypesFiltersRequest is dispatched', () => {
      describe('when pokemonFiltersService.getPokemonTypeFilters throws error', () => {
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonFilterService, 'getPokemonTypeFilters').mockReturnValue(errorResp)
          actions = of(getpokemonTypesFiltersRequest())
        })

        it('should call getNextPokemonListPageRequestError', async () => {
          const result = await firstValueFrom(effects.getpokemonTypesFiltersRequest$)
          expect(result).toEqual(getpokemonTypesFiltersRequestError())
        })
      })

      describe('when pokemonFiltersService.getPokemonTypeFilters success', () => {
        const successResp: Partial<PokemonTypesFiltersResponseDto> = { count: 100, results: [{ name: 'test'} as PokemonType, {} as PokemonType]} 
        beforeEach(() => { 
          jest.spyOn(pokemonFilterService, 'getPokemonTypeFilters').mockReturnValue(of(successResp as PokemonTypesFiltersResponseDto))
          actions = of(getpokemonTypesFiltersRequest())
        })

        it('should call getpokemonTypesFiltersRequestError', async () => {
          const result = await firstValueFrom(effects.getpokemonTypesFiltersRequest$)
          expect(result).toEqual(getpokemonTypesFiltersRequestSuccess({ pokemonsTypeFilters: successResp as PokemonTypesFiltersResponseDto}))
        })
      })
    })
  });
});
