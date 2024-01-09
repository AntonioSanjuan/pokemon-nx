import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, catchError, defaultIfEmpty, of, tap } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { selectPokemonDetails } from "../../state/pokemonDetails.selectors";
import { getPokemonByNameRequest } from "../../state/pokemonDetails.actions";
import { initialPokemonDetailsState } from "../../state/pokemonDetails.reducer";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonDetailsResolver implements Resolve<any> {
    private store: Store = inject(Store)
  
    private pokemonDetailsAlreadyExists(currentPokemonDetails: PokemonResponseDto|undefined): boolean {
      return currentPokemonDetails !== initialPokemonDetailsState.pokemon
    }
    private isOtherPokemonDetails(currentPokemonDetails: PokemonResponseDto|undefined, pokemonId: string): boolean {
      return ![currentPokemonDetails?.id.toString(), currentPokemonDetails?.name].includes(pokemonId.toString())
    }

    resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponseDto|undefined> {
        const pokemonId = route.paramMap.get('id');

        if(pokemonId) {
            return this.store.select(selectPokemonDetails).pipe(
              tap((pokemonDetails: PokemonResponseDto | undefined) => {
                if(!this.pokemonDetailsAlreadyExists(pokemonDetails) || this.isOtherPokemonDetails(pokemonDetails, pokemonId)) {
                  this.store.dispatch(getPokemonByNameRequest({pokemonName: pokemonId}))
                }
              })
            )
        }

        return of(undefined);
    }
  }