import { Component, inject } from '@angular/core';
import { AuthService } from '@gt-motive-app/libs/services/auth';

@Component({
  selector: 'gt-motive-app-account-entry',
  template: `<p>status: {{authService.isUserLoggedIn$ | async}}</p>
        <button (click)="authService.logIn('demo', 'demo')">log in</button>
        <button (click)="authService.logOut()">log out</button>`,
})

export class RemoteEntryComponent {
  public authService = inject(AuthService)
}
