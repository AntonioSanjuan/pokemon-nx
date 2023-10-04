import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf'
import { HomeComponent } from './home/home.component';
import { AuthenticateGuard } from './core/auth-guard.service';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      loadRemoteModule('account', './routes').then((m) => m.appRoutes),
    canActivate: []
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticateGuard]
  },
];
