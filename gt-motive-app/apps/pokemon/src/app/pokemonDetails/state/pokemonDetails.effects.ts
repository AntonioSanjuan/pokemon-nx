import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPokemonByNameRequest, getPokemonByNameRequestError, getPokemonByNameRequestSuccess } from './pokemonDetails.actions';
import { map, catchError, of, mergeMap } from 'rxjs'
import { PokemonDetailsService } from './pokemonDetails.service';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
@Injectable()
export class PokemonDetailsEffects {
    private pokemonDetailsService: PokemonDetailsService = inject(PokemonDetailsService)
    private actions$: Actions = inject(Actions);

    getPokemonByNameRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonByNameRequest),
        mergeMap(({ pokemonName }) => 
            this.pokemonDetailsService.getPokemonByName(pokemonName).pipe(
                map((pokemon: PokemonResponseDto) => getPokemonByNameRequestSuccess({pokemon})),
                catchError(_ => of(getPokemonByNameRequestError()))
            )
        )
    ))
}