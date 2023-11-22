import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromPokemon from './+state/pokemon.reducer';
import { StoreModule } from '@ngrx/store';
import { POKEMONLIST_FEATURE_KEY, PokemonListEffects, PokemonListService, pokemonListReducer } from '@gt-motive-app/store';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(fromPokemon.POKEMON_FEATURE_KEY, fromPokemon.pokemonReducer),
      )
    ],
    children: [
      {
        path: 'list',
        providers: [
          PokemonListService,
          importProvidersFrom(
            EffectsModule.forFeature([PokemonListEffects]),
          ),
        ],
        loadComponent: () =>
          import('./pokemonList/pokemon-list.component').then(
            (m) => m.PokemonListComponent
          ),
      },
    ],
  },
];
