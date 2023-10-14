import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getPokemonListRequest, getPokemonListRequestError, getPokemonListRequestSuccess } from './pokemonList.actions';
import { map, switchMap, catchError, of } from 'rxjs'
import { PokemonService } from '../../shared/services/Pokemon/pokemon.service';
import { PokemonsResponseDto } from '../../shared/services/Pokemon/models/pokemonsResponseDto.model';
@Injectable()
export class PokemonListEffects {
    private pokemonService: PokemonService = inject(PokemonService)
    private actions$: Actions = inject(Actions);

    getPokemonListRequest$ = createEffect(() => this.actions$.pipe(
        ofType(getPokemonListRequest),
        switchMap(() =>
            this.pokemonService.getPokemonPage(1).pipe(
                map((pokemons: PokemonsResponseDto) => getPokemonListRequestSuccess({pokemons})),
                catchError(_ => of(getPokemonListRequestError()))
            )
        )
    ))
    
    // concatLatestFrom(() => this.store.select....)
    // mergeMap([_, query])
}