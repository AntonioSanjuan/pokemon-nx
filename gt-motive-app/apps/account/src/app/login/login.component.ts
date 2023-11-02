import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { LoginForm, loginForm } from './login.form';
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { loginRequest } from './store/login.actions';
import { LoginData } from './model/loginRequest.model';
import { getIsUserLogged } from '@gt-motive-app/store';
import { UiModule } from '@gt-motive-app/ui';

@Component({
  selector: 'gt-motive-app-login',
  templateUrl: './login.component.html',
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    LetDirective 
  ],
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent implements OnInit {
  private store = inject(Store)
  public loginForm!: FormGroup<LoginForm>
  public isUserLogged$ = this.store.select(getIsUserLogged)

  ngOnInit(): void {
      this.loginForm = loginForm()
  }

  login(): void {
    const loginData = {...this.loginForm?.getRawValue() } as LoginData
    if(loginData.userName && loginData.password){
      this.store.dispatch(loginRequest({ loginData }))
    }
  }
}
