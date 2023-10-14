import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromPokemon from './+state/pokemon.reducer';
import { PokemonListEffects } from './pokemonList/store/pokemonList.effects';
import { StoreModule } from '@ngrx/store';
import { PokemonService } from './shared/services/Pokemon/pokemon.service';

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
          PokemonService,
          importProvidersFrom(EffectsModule.forFeature([PokemonListEffects])),
        ],
        loadComponent: () =>
          import('./pokemonList/pokemon-list.component').then(
            (m) => m.PokemonListComponent
          ),
      },
    ],
  },
];
