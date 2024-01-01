import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { getPokemonListRequest, getpokemonTypesFiltersRequest, initialPokemonListState, selectPokemonList } from "@gt-motive-app/store";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonListResolver implements Resolve<any> {
    private store: Store = inject(Store)
  
    resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponseDto[]> {
      return this.store.select(selectPokemonList).pipe(
        tap((pokemonList: PokemonResponseDto[]) => {
          if(pokemonList === initialPokemonListState.list) {
            console.log("request from PokemonListResolver")
            this.store.dispatch(getPokemonListRequest())
            this.store.dispatch(getpokemonTypesFiltersRequest())
          }
        })
      )
    }
  }