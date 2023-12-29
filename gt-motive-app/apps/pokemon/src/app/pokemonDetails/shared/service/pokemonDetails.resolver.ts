import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { PokemonDetailsService } from "../../state/pokemonDetails.service";
import { Injectable, inject } from "@angular/core";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { selectPokemonDetails } from "../../state/pokemonDetails.selectors";
import { getPokemonByNameRequest } from "../../state/pokemonDetails.actions";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonDetailsResolver implements Resolve<any> {
    private store: Store = inject(Store)
  
    resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponseDto|undefined> {
        const pokemonId = route.paramMap.get('id');

        if(pokemonId) {
            this.store.dispatch(getPokemonByNameRequest({pokemonName: pokemonId}))
            return this.store.select(selectPokemonDetails)
        }

        return of(undefined);
    }
  }