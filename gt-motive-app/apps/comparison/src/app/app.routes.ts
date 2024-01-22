import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects'

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        // StoreModule.forFeature(fromAccount.ACCOUNT_FEATURE_KEY, fromAccount.accountReducer),
      )
    ],
    children: [
      {
        path: '',
        providers: [
          importProvidersFrom(
            // EffectsModule.forFeature([LoginEffects])
          )
        ],    
        loadComponent: () =>
          import('./comparison/comparison.component').then((m) => m.ComparisonComponent),
      }
    ]

  },
];
