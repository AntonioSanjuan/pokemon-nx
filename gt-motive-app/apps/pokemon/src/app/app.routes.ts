import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import * as fromPokemon from './+state/pokemon.reducer';
import { StoreModule } from '@ngrx/store';
import { POKEMON_FEATURE_KEY, PokemonFiltersEffects, PokemonFiltersService, PokemonListEffects, PokemonListService } from '@gt-motive-app/store';
import { PokemonDetailsEffects } from './pokemonDetails/state/pokemonDetails.effects';
import { PokemonDetailsService } from './pokemonDetails/state/pokemonDetails.service';
import { PokemonDetailsResolver } from './pokemonDetails/shared/service/pokemonDetails.resolver';
import { PokemonListResolver } from './pokemonList/shared/service/pokemonList.resolver';
import { TranslateModule } from '@ngx-translate/core';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        TranslateModule.forChild(),
        StoreModule.forFeature(POKEMON_FEATURE_KEY, fromPokemon.pokemonReducer),
      )
    ],
    children: [
      {
        path: 'list',
        resolve: { data: PokemonListResolver },
        providers: [
          PokemonListService,
          PokemonFiltersService,
          importProvidersFrom(
            EffectsModule.forFeature([PokemonListEffects, PokemonFiltersEffects]),
          ),
        ],
        loadComponent: () =>
          import('./pokemonList/pokemon-list.component').then(
            (m) => m.PokemonListComponent
          ),
      },
      {
        path: ':id',
        resolve: { data: PokemonDetailsResolver },
        providers: [
          PokemonDetailsService,
          importProvidersFrom(
            EffectsModule.forFeature([PokemonDetailsEffects]),
          ),
        ],
        loadComponent: () =>
          import('./pokemonDetails/pokemon-details.component').then(
            (m) => m.PokemonDetailsComponent
          ),
      },
    ],
  },
];
