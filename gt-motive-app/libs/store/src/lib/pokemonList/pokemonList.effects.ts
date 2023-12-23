import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getNextPokemonListPageRequest, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess, getPokemonListRequest, getPokemonListRequestError, getPokemonListRequestSuccess, updatePokemonListQueryFilters } from './pokemonList.actions';
import { map, switchMap, catchError, of, mergeMap } from 'rxjs'
import { Store } from '@ngrx/store';
import { PokemonListService } from './pokemonList.service';
import { PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { selectPokemonQuery } from './pokemonList.selectors';
@Injectable()
export class PokemonListEffects {
    private pokemonService: PokemonListService = inject(PokemonListService)
    private store: Store = inject(Store)
    private actions$: Actions = inject(Actions);

    getPokemonListRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonListRequest, updatePokemonListQueryFilters),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        switchMap(([_, query]) =>
            this.pokemonService.getPokemonPage(0, query.pageSize).pipe(
                map((pokemons: PokemonsResponseDto) => getPokemonListRequestSuccess({pokemons})),
                catchError(_ => of(getPokemonListRequestError()))
            )
        )
    ))
    
    getNextPokemonListPageRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getNextPokemonListPageRequest),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        mergeMap(([_, query]) => 
            this.pokemonService.getPokemonPage(query.currentPage + 1, query.pageSize).pipe(
                map((pokemons: PokemonsResponseDto) => getNextPokemonListPageRequestSuccess({pokemons})),
                catchError(_ => of(getNextPokemonListPageRequestError()))
            )
        )
    ))
    // concatLatestFrom(() => this.store.select....)
    // mergeMap([_, query])
}