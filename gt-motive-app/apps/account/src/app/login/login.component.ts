import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { Store } from '@ngrx/store';
import { LoginForm, loginForm } from './login.form';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'gt-motive-app-login',
  templateUrl: './login.component.html',
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    LetDirective 
  ],
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent implements OnInit {
  public authService = inject(AuthService)
  public store = inject(Store)
  public loginForm!: FormGroup<LoginForm>

  ngOnInit(): void {
      this.loginForm = loginForm()
  }

  login(): void {
    const loginData = {...this.loginForm?.getRawValue() }
    console.log("🚀 ~ file: login.component.ts:31 ~ LoginComponent ~ login ~ loginData:", loginData)
  }
}
