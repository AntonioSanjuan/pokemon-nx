import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, firstValueFrom, of, throwError} from 'rxjs';
import { PokemonDetailsEffects } from './pokemonDetails.effects';
import { initialPokemonState } from '../../+state/models/pokemonState.initialState';
import { HttpErrorResponse } from '@angular/common/http';
import { getPokemonByNameRequest, getPokemonByNameRequestError, getPokemonByNameRequestSuccess } from './pokemonDetails.actions';
import { PokemonDetailsService } from './pokemonDetails.service';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonDetailsEffects', () => {
  let actions: Observable<Action>;
  let effects: PokemonDetailsEffects;
  let pokemonDetailsService: PokemonDetailsService
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonDetailsEffects,
        PokemonDetailsService,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: initialPokemonState
        }),
      ],
    });

    effects = TestBed.inject(PokemonDetailsEffects);
    pokemonDetailsService = TestBed.inject(PokemonDetailsService)
    store = TestBed.inject(Store)
  });

  describe('getPokemonByNameRequest$', () => {
    describe('when getPokemonByNameRequest is dispatched', () => {
      const pokemonNameSut = 'pokemonNameTest'
      describe('when pokemonDetailsService.getPokemonByName throws error', () => {
        const errorResp = throwError(() => new HttpErrorResponse( { error: '', status: 500} ))
        beforeEach(() => { 
          jest.spyOn(pokemonDetailsService, 'getPokemonByName').mockReturnValue(errorResp)
          actions = of(getPokemonByNameRequest({ pokemonName: pokemonNameSut}))
        })

        it('should call getNextPokemonListPageRequestError', async () => {
          const result = await firstValueFrom(effects.getPokemonByNameRequest$)
          expect(result).toEqual(getPokemonByNameRequestError())
        })
      })

      describe('when pokemonDetailsService.getPokemonByName success', () => {
        const successResp: Partial<PokemonResponseDto> = { name: 'test' , types: []} 
        beforeEach(() => { 
          jest.spyOn(pokemonDetailsService, 'getPokemonByName').mockReturnValue(of(successResp as PokemonResponseDto))
          actions = of(getPokemonByNameRequest({ pokemonName: pokemonNameSut}))
        })

        it('should call getpokemonTypesFiltersRequestError', async () => {
          const result = await firstValueFrom(effects.getPokemonByNameRequest$)
          expect(result).toEqual(getPokemonByNameRequestSuccess({ pokemon: successResp as PokemonResponseDto}))
        })
      })
    })
  });
});
