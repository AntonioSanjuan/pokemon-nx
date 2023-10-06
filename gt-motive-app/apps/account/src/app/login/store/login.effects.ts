import { AuthService } from "@gt-motive-app/libs/services/auth";
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginRequest, loginRequestError, loginRequestSuccess } from "./login.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { LoginResponseDto } from "@gt-motive-app/libs/models";

@Injectable()
export class LoginEffects {
    private authService: AuthService = inject(AuthService)
    private actions$: Actions = inject(Actions);

    loginRequest$ = createEffect(() => this.actions$.pipe(
        ofType(loginRequest),
        switchMap(({ loginData }) =>
            this.authService.logIn(loginData.userName, loginData.password).pipe(
                map((loginResponse: LoginResponseDto) => loginRequestSuccess()),
                catchError(_ => of(loginRequestError()))
            )
        )
    ))
}