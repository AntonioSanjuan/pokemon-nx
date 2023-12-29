import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { PokemonMinifiedDto } from "@gt-motive-app/libs/models";
import { Store } from "@ngrx/store";
import { getPokemonListRequest, selectPokemonList } from "@gt-motive-app/store";

@Injectable({
    providedIn: 'root'
  })
  export class PokemonListResolver implements Resolve<any> {
    private store: Store = inject(Store)
  
    resolve(route: ActivatedRouteSnapshot): Observable<PokemonMinifiedDto[]> {
      this.store.dispatch(getPokemonListRequest())
      return this.store.select(selectPokemonList)
    }
  }