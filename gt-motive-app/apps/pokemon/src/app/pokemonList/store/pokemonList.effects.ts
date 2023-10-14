import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getNextPokemonListPageRequest, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess, getPokemonListRequest, getPokemonListRequestError, getPokemonListRequestSuccess } from './pokemonList.actions';
import { map, switchMap, catchError, of, mergeMap } from 'rxjs'
import { PokemonService } from '../../shared/services/Pokemon/pokemon.service';
import { PokemonsResponseDto } from '../../shared/services/Pokemon/models/pokemonsResponseDto.model';
import { selectPokemonQuery } from './pokemonList.selectors';
import { Store } from '@ngrx/store';
@Injectable()
export class PokemonListEffects {
    private pokemonService: PokemonService = inject(PokemonService)
    private store: Store = inject(Store)
    private actions$: Actions = inject(Actions);

    getPokemonListRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonListRequest),
        switchMap(() =>
            this.pokemonService.getPokemonPage(0).pipe(
                map((pokemons: PokemonsResponseDto) => getPokemonListRequestSuccess({pokemons})),
                catchError(_ => of(getPokemonListRequestError()))
            )
        )
    ))
    
    getNextPokemonListPageRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getNextPokemonListPageRequest),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        mergeMap(([_, query]) => 
            this.pokemonService.getPokemonPage(query.currentPage + 1).pipe(
                map((pokemons: PokemonsResponseDto) => getNextPokemonListPageRequestSuccess({pokemons})),
                catchError(_ => of(getNextPokemonListPageRequestError()))
            )
        )
    ))
    // concatLatestFrom(() => this.store.select....)
    // mergeMap([_, query])
}