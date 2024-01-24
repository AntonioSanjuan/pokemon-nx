import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects'
import { POKEMONCOMPARISON_FEATURE_KEY, PokemonComparisonEffects, PokemonComparitionService, pokemonComparisonReducer } from '@gt-motive-app/store';
import { ComparisonResolver } from './comparison/shared/service/comparison.resolver';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(POKEMONCOMPARISON_FEATURE_KEY, pokemonComparisonReducer),
      )
    ],
    children: [
      {
        path: '',
        resolve: { data: ComparisonResolver },
        providers: [
          PokemonComparitionService,
          importProvidersFrom(
            EffectsModule.forFeature([PokemonComparisonEffects])
          )
        ],    
        loadComponent: () =>
          import('./comparison/comparison.component').then((m) => m.ComparisonComponent),
      }
    ]

  },
];
