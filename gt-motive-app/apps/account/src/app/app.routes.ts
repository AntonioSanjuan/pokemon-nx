import { Route } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { provideStore, provideState, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import * as fromAccount from './+state/account.reducer';
import { AccountEffects } from './+state/account.effects';
import { importProvidersFrom } from '@angular/core';

export const appRoutes: Route[] = [
  {
    path: '',
    providers: [
      AuthService,
      importProvidersFrom(
        StoreModule.forFeature(fromAccount.ACCOUNT_FEATURE_KEY, fromAccount.accountReducer),
        EffectsModule.forFeature([AccountEffects])
      )
    ],
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
];
