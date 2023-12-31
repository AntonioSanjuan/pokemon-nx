import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, of } from 'rxjs'
import { Store } from '@ngrx/store';
import { getpokemonTypesFiltersRequest, getpokemonTypesFiltersRequestError, getpokemonTypesFiltersRequestSuccess } from './pokemonFilters.actions';
import { PokemonFiltersService } from './pokemonFilters.service';
import { PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';
@Injectable()
export class PokemonFiltersEffects {
    private pokemonFiltersService: PokemonFiltersService = inject(PokemonFiltersService)
    private store: Store = inject(Store)
    private actions$: Actions = inject(Actions);

    getpokemonTypesFiltersRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getpokemonTypesFiltersRequest),
        switchMap((_) =>
            this.pokemonFiltersService.getPokemonTypeFilters().pipe(
                map((pokemonTypes: PokemonTypesFiltersResponseDto) => getpokemonTypesFiltersRequestSuccess({pokemonsTypeFilters: pokemonTypes})),
                catchError(_ => of(getpokemonTypesFiltersRequestError()))
            )
        )
    ))
}