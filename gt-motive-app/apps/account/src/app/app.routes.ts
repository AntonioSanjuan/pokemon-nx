import { Route } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { StoreModule } from '@ngrx/store';
import * as fromAccount from './+state/account.reducer';
import { importProvidersFrom } from '@angular/core';

export const appRoutes: Route[] = [
  {
    path: '',
    providers: [
      AuthService,
      importProvidersFrom(
        StoreModule.forFeature(fromAccount.ACCOUNT_FEATURE_KEY, fromAccount.accountReducer),
      )
    ],
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
];
