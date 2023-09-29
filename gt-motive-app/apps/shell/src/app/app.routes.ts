import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf'

export const appRoutes: Route[] = [
  {
    path: 'account',
    loadChildren: () =>
      loadRemoteModule('account', './routes').then((m) => m.appRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
