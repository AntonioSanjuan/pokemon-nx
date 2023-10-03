import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LetDirective, LetModule } from '@ngrx/component';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'gt-motive-app-login',
  templateUrl: './login.component.html',
  imports: [ 
    CommonModule,
    LetDirective 
  ],
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  public authService = inject(AuthService)
  public store = inject(Store)
}
