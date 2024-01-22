import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuard } from './core/auth-guard.service';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

export const appRoutes: Route[] = [
  {
    path: 'pokedex',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('pokemon', './routes').then((m) => m.appRoutes),
      },
    ],
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'account',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('account', './routes').then((m) => m.appRoutes),
      },
    ],
    canActivate: [],
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ],
    canActivate: [AuthenticateGuard],
  },
  // {
  //   path: '**',
  //   redirectTo: '', pathMatch: 'full'
  // },
];
