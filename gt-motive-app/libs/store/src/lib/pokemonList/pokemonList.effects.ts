import { Injectable, inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getFilteredPokemonListRequest, getNextPokemonListPageRequest, getNextPokemonListPageRequestError, getNextPokemonListPageRequestSuccess, getPokemonListRequest, getPokemonListRequestError, getPokemonListRequestSuccess, updatePokemonListQueryFilters, updatePokemonTypeFilter } from './pokemonList.actions';
import { map, switchMap, catchError, of, mergeMap } from 'rxjs'
import { Store } from '@ngrx/store';
import { PokemonListService } from './pokemonList.service';
import { PokemonType, PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { selectPokemonQuery } from './pokemonList.selectors';

@Injectable()
export class PokemonListEffects {
    private pokemonListService: PokemonListService = inject(PokemonListService)
    private store: Store = inject(Store)
    private actions$: Actions = inject(Actions);
    
    updatePokemonTypeFilter$ = createEffect(() => this.actions$.pipe(
        ofType(updatePokemonTypeFilter),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        switchMap(([_, query]) =>
            {
                if(query.filters.byType) {
                    return of(getFilteredPokemonListRequest())
                } else {
                    return of(getPokemonListRequest())
                }
            })
    ))

    getPokemonListRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonListRequest, updatePokemonListQueryFilters),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        switchMap(([_, query]) =>
            this.pokemonListService.getPokemonPage(0, query.pageSize).pipe(
                map((pokemons: PokemonsResponseDto) => getPokemonListRequestSuccess({pokemons})),
                catchError(_ => of(getPokemonListRequestError()))
            )
        )
    ))
    
    getFilteredPokemonListRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getFilteredPokemonListRequest),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        switchMap(([_, query]) =>
            this.pokemonListService.getFilteredPokemonPage(query.filters.byType as PokemonType).pipe(
                map((filteredPokemons: PokemonsResponseDto) => getPokemonListRequestSuccess({pokemons: filteredPokemons})),
                catchError(_ => of(getPokemonListRequestError()))
            )
        )
    ))

    getNextPokemonListPageRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getNextPokemonListPageRequest),
        concatLatestFrom(() => this.store.select(selectPokemonQuery)),
        mergeMap(([_, query]) => 
            this.pokemonListService.getPokemonPage(query.currentPage + 1, query.pageSize).pipe(
                map((pokemons: PokemonsResponseDto) => getNextPokemonListPageRequestSuccess({pokemons})),
                catchError(_ => of(getNextPokemonListPageRequestError()))
            )
        )
    ))

    
    // concatLatestFrom(() => this.store.select....)
    // mergeMap([_, query])
}