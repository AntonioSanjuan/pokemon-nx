import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf'
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      loadRemoteModule('account', './routes').then((m) => m.appRoutes),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
