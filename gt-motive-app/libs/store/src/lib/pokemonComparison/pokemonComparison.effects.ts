import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getComparisonPokemonsError, getComparisonPokemonsRequest, getComparisonPokemonsSuccess } from './pokemonComparison.actions';
import { switchMap, of, map, catchError } from 'rxjs'
import { Store } from '@ngrx/store';
import { PokemonComparitionService } from './pokemonComparison.service';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';

@Injectable()
export class PokemonComparisonEffects {
    private pokemonComparisonService: PokemonComparitionService = inject(PokemonComparitionService)
    private store: Store = inject(Store)
    private actions$: Actions = inject(Actions);
    
    getComparisonPokemonsRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getComparisonPokemonsRequest),
        switchMap(({ pokemonNames }) => 
            this.pokemonComparisonService.getComparisonPokemons(pokemonNames).pipe(
                map((pokemons: PokemonResponseDto[]) => getComparisonPokemonsSuccess({pokemons: pokemons})),
                catchError(_ => of(getComparisonPokemonsError()))
            )
        )
    ))
}