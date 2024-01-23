import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects'
import * as fromComparison from './+state/comparison.reducer';
import { PokemonComparisonEffects } from '@gt-motive-app/store';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(fromComparison.COMPARISON_FEATURE_KEY, fromComparison.comparisonReducer),
      )
    ],
    children: [
      {
        path: '',
        providers: [
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
