import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, filter, of, tap } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { getComparisonPokemonsRequest, getPokemonComparison } from "@gt-motive-app/store";

@Injectable({
    providedIn: 'root'
  })
  export class ComparisonResolver implements Resolve<PokemonResponseDto[]|undefined> {
    private store: Store = inject(Store)

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponseDto[]|undefined> {
      const reqPokemons: string[] = []
        return this.store.select(getPokemonComparison).pipe(
        filter((pokemons: PokemonResponseDto[]) => !!pokemons && pokemons.length > 0 ),
          tap((pokemons: PokemonResponseDto[]) => {
            console.log("pokemons", pokemons)
            if(reqPokemons.some((reqPokemon) => !pokemons.map((pokemon) => pokemon.name).includes(reqPokemon))) {
              this.store.dispatch(getComparisonPokemonsRequest({ pokemonNames: reqPokemons}))
            }
        }),
      )
    }
}
