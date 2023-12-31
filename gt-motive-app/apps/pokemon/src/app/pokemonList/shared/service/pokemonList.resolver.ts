import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { PokemonMinifiedDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { getPokemonListRequest, getpokemonTypesFiltersRequest, initialPokemonListState, selectPokemonList } from "@gt-motive-app/store";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonListResolver implements Resolve<any> {
    private store: Store = inject(Store)
  
    resolve(route: ActivatedRouteSnapshot): Observable<PokemonMinifiedDto[]> {
      return this.store.select(selectPokemonList).pipe(
        tap((pokemonList: PokemonMinifiedDto[]) => {
          if(pokemonList === initialPokemonListState.list) {
            console.log("request from PokemonListResolver")
            this.store.dispatch(getPokemonListRequest())
            this.store.dispatch(getpokemonTypesFiltersRequest())
          }
        })
      )
    }
  }