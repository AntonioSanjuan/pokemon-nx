import { Injectable, inject } from '@angular/core';
import {AppRoutes, LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
import { AppInit, clearUser, loadedApp, setUser, unloadedApp } from '@gt-motive-app/store';
import { Store } from '@ngrx/store';
import { Observable, delay, map, of } from 'rxjs';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private authStorageKey = 'authenticatedStatus'
  private store: Store = inject(Store)
  private router: Router = inject(Router)
  
  public logIn(userName: string, password: string): Observable<LoginResponseDto> {
    const request: LoginRequestDto = {
      userName,
      password
    };

    //mock
    const resp = { status: (request.userName === 'demo' && request.password === 'demo')} as LoginResponseDto;

    return of(resp).pipe(
      delay(3000),
      map((resp) => {
        this.authenticateUser(resp)
        this.router.navigate([AppRoutes.Home])

        return resp
      }),
    )
  }

  private authenticateUser(resp: LoginResponseDto) {
    this.store.dispatch(setUser({ user: resp}))
    this.store.dispatch(loadedApp({initialized: AppInit.ACCOUNT}))
    localStorage.setItem(this.authStorageKey, 'true')
  }

  public checkAuthPersistance(): void {
    const authenticatedStatus = localStorage.getItem(this.authStorageKey)
    if(authenticatedStatus && authenticatedStatus === 'true') {
      this.authenticateUser({ status: true} as LoginResponseDto)
    }
  }

  public logOut(): void {
    this.store.dispatch(clearUser())
    this.store.dispatch(unloadedApp({uninitialized: AppInit.ACCOUNT}))
    localStorage.removeItem(this.authStorageKey)
    this.router.navigate([AppRoutes.Login])

  }
}
