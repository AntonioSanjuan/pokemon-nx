import { Injectable, inject } from '@angular/core';
import {LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
import { clearUser, setUser } from '@gt-motive-app/store';
import { Store } from '@ngrx/store';
import { Observable, delay, map, of } from 'rxjs';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  private store: Store = inject(Store)
  private router: Router = inject(Router)
  
  public logIn(userName: string, password: string): Observable<LoginResponseDto> {
    const request: LoginRequestDto = {
      userName,
      password
    };

    const resp = { status: (request.userName === 'demo' && request.password === 'demo')} as LoginResponseDto;

    return of(resp).pipe(
      delay(2000),
      map((resp) => {
        this.store.dispatch(setUser({ user: resp}))
        this.router.navigate(['/'])
        return resp
      }),
    )
  }

  public logOut(): void {
    this.store.dispatch(clearUser())
  }
}
