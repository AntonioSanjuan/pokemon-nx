import { Route } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { StoreModule } from '@ngrx/store';
import * as fromAccount from './+state/account.reducer';
import { importProvidersFrom } from '@angular/core';
import { loginReducer } from './login/store/login.reducer';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    providers: [
      importProvidersFrom(
        StoreModule.forFeature(fromAccount.ACCOUNT_FEATURE_KEY, fromAccount.accountReducer),
      )
    ],
    children: [
      {
        path: 'login',
        providers: [
          AuthService,
          importProvidersFrom(
            // EffectsModule.forFeature([L])
            // StoreModule.forFeature('login', loginReducer)
          )
        ],    
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent),
      }
    ]

  },
];
