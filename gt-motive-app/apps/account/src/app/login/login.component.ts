import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '@gt-motive-app/libs/services/auth';

@Component({
  selector: 'gt-motive-app-login',
  templateUrl: './login.component.html',
  imports: [ CommonModule ],
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  public authService = inject(AuthService)

}
