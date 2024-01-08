import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPokemonByNameRequest, getPokemonByNameRequestError, getPokemonByNameRequestSuccess } from './pokemonDetails.actions';
import { map, catchError, of, mergeMap, tap } from 'rxjs'
import { PokemonDetailsService } from './pokemonDetails.service';
import { AppRoutes, PokemonResponseDto } from '@gt-motive-app/libs/models';
import { Router } from '@angular/router';
@Injectable()
export class PokemonDetailsEffects {
    private pokemonDetailsService: PokemonDetailsService = inject(PokemonDetailsService)
    private actions$: Actions = inject(Actions);
    private router: Router = inject(Router)

    getPokemonByNameRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonByNameRequest),
        mergeMap(({ pokemonName }) => 
            this.pokemonDetailsService.getPokemonByName(pokemonName).pipe(
                map((pokemon: PokemonResponseDto) => getPokemonByNameRequestSuccess({pokemon})),
                catchError(_ => {
                    this.router.navigate([AppRoutes.PokemonList])
                    return of(getPokemonByNameRequestError())}
                )
            )
        )
    ))
}