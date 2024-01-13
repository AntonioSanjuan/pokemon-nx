import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http'
import { PokemonListEffects } from './pokemonList.effects';
import { PokemonListService } from './pokemonList.service';
import { getFilteredPokemonListRequest, getNextPokemonListPageRequest, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess, getPokemonListRequest, getPokemonListRequestError, getPokemonListRequestSuccess, updatePokemonListQueryFilters, updatePokemonTypeFilter } from './pokemonList.actions';
import { selectPokemonQuery } from './pokemonList.selectors';
import { PokemonQuery, PokemonQueryFilters, PokemonResponseDto, PokemonType, PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ApiService } from '@gt-motive-app/services/api';
import { BasePokemonStateMock } from '@gt-motive-app/test';
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
        ApiService,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: BasePokemonStateMock
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
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(errorResp)
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
  describe('getFilteredPokemonListRequest$', () => {
    const pokemonQuery = {
      filters: {
        byType: { name: 'type' } as PokemonType
      }
    } as PokemonQuery;

    beforeEach(() => {
      store.overrideSelector(selectPokemonQuery, pokemonQuery);
    })
    describe('when getFilteredPokemonListRequest is dispatched', () => {
      describe('when pokemonListService.getFilteredPokemonPage throws error', () => {
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getFilteredPokemonPage').mockReturnValue(errorResp)
          actions = of(getFilteredPokemonListRequest())
        })
  
        it('should call getPokemonListRequestError', async () => {
          const result = await firstValueFrom(effects.getFilteredPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestError())
        })
      })
  
      describe('when pokemonListService.getFilteredPokemonPage success', () => {
        const successResp: Partial<PokemonsResponseDto> = { count: 100, results: [{} as PokemonResponseDto]} 
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getFilteredPokemonPage').mockReturnValue(of(successResp as PokemonsResponseDto))
          actions = of(getFilteredPokemonListRequest())
        })
  
        it('should call getPokemonListRequestSuccess', async () => {
          const result = await firstValueFrom(effects.getFilteredPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestSuccess({ pokemons: successResp as PokemonsResponseDto}))
        })
      })
    })
  })

  describe('getPokemonListRequest$', () => {
    const pokemonQuery = {
      pageSize: 80,
    } as PokemonQuery;

    beforeEach(() => {
      store.overrideSelector(selectPokemonQuery, pokemonQuery);
    })
    describe('when getPokemonListRequest is dispatched', () => {
      describe('when pokemonListService.getPokemonPage throws error', () => {
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(errorResp)
          actions = of(getPokemonListRequest())
        })
  
        it('should call getPokemonListRequestError', async () => {
          const result = await firstValueFrom(effects.getPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestError())
        })
      })
  
      describe('when pokemonListService.getPokemonPage success', () => {
        const successResp: Partial<PokemonsResponseDto> = { count: 100, results: [{} as PokemonResponseDto]} 
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(of(successResp as PokemonsResponseDto))
          actions = of(getPokemonListRequest())
        })
  
        it('should call getPokemonListRequestSuccess', async () => {
          const result = await firstValueFrom(effects.getPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestSuccess({ pokemons: successResp as PokemonsResponseDto}))
        })
      })
    })

    describe('when updatePokemonListQueryFilters is dispatched', () => {
      describe('when pokemonListService.getPokemonPage throws error', () => {
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(errorResp)
          actions = of(updatePokemonListQueryFilters({ filters: {} as PokemonQueryFilters}))
        })
  
        it('should call getPokemonListRequestError', async () => {
          const result = await firstValueFrom(effects.getPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestError())
        })
      })
  
      describe('when pokemonListService.getPokemonPage success', () => {
        const successResp: Partial<PokemonsResponseDto> = { count: 100, results: [{} as PokemonResponseDto]} 
        beforeEach(() => { 
          jest.spyOn(pokemonListService, 'getPokemonPage').mockReturnValue(of(successResp as PokemonsResponseDto))
          actions = of(updatePokemonListQueryFilters({filters: {} as PokemonQueryFilters}))
        })
  
        it('should call getPokemonListRequestSuccess', async () => {
          const result = await firstValueFrom(effects.getPokemonListRequest$)
          expect(result).toEqual(getPokemonListRequestSuccess({ pokemons: successResp as PokemonsResponseDto}))
        })
      })
    })
  })

  describe('updatePokemonTypeFilter$', () => {


    beforeEach(() => {
    })
    describe('when updatePokemonTypeFilter is dispatched', () => {
      describe('when filter byType is setted', () => {
        beforeEach(() => { 
          const pokemonQuery = {
            filters: {
              byType: { name: 'type' } as PokemonType
            }
          } as PokemonQuery;
          store.overrideSelector(selectPokemonQuery, pokemonQuery);          
          actions = of(updatePokemonTypeFilter({ selectedPokemonType: {} as PokemonType}))
        })
  
        it('should return getFilteredPokemonListRequest', async () => {
          const result = await firstValueFrom(effects.updatePokemonTypeFilter$)
          expect(result).toEqual(getFilteredPokemonListRequest())
        })
      })
  
      describe('when filter byType isnt setted', () => {
        beforeEach(() => { 
          const pokemonQuery = {
            filters: {
              byType: undefined
            }
          } as PokemonQuery;
          store.overrideSelector(selectPokemonQuery, pokemonQuery);          
          actions = of(updatePokemonTypeFilter({ selectedPokemonType: {} as PokemonType}))
        })
  
        it('should return getPokemonListRequest', async () => {
          const result = await firstValueFrom(effects.updatePokemonTypeFilter$)
          expect(result).toEqual(getPokemonListRequest())
        })
      })
    })
  })
});
