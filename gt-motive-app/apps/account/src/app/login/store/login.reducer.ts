import { createReducer, on } from '@ngrx/store';
import * as LoginActions from "./login.actions";

export interface LoginState {
    numberOfTries: number
}

export const initialLoginState: LoginState = {
    numberOfTries: 0,
}

export const loginReducer = createReducer(
    initialLoginState,
  on(LoginActions.addTry, (state: LoginState) => ({
    ...state,
    numberOfTries: state.numberOfTries + 1
  })),
);