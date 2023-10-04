import { createReducer, on } from '@ngrx/store';
import * as LoginActions from "./login.actions";
import { LoginResponseDto } from '@gt-motive-app/libs/models';

export interface LoginState {
    loginResponse?: LoginResponseDto
    numberOfTries: number
}

export const initialLoginState: LoginState = {
    loginResponse: undefined,
    numberOfTries: 0,
}

export const loginReducer = createReducer(
    initialLoginState,
  on(LoginActions.loginRequestError, (state: LoginState) => ({
    ...state,
    numberOfTries: state.numberOfTries + 1
  })),
  on(LoginActions.loginRequestSuccess, (state: LoginState, { loginResponse }) => ({
    ...state,
    numberOfTries: 0,
    loginResponse
  })),
);