import { Route } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';

export const appRoutes: Route[] = [
  {
    path: '',
    providers: [AuthService],
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
];
