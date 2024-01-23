import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, filter, of, tap } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { getComparisonPokemonsRequest, getPokemonComparison } from "@gt-motive-app/store";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonDetailsResolver implements Resolve<PokemonResponseDto[]> {
    private store: Store = inject(Store)

    resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponseDto[]> {
        const reqPokemons: string[] = []
        if(reqPokemons.length > 0) {
            return this.store.select(getPokemonComparison).pipe(
              tap((pokemons: PokemonResponseDto[]) => {
                if(reqPokemons.some((reqPokemon) => !pokemons.map((pokemon) => pokemon.name).includes(reqPokemon))) {
                  this.store.dispatch(getComparisonPokemonsRequest({ pokemonNames: reqPokemons}))
                }
            }),
            filter((pokemons: PokemonResponseDto[]) => !!pokemons)
            )
        }
    }
  }