import { Injectable, inject } from '@angular/core';
import {LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
import { clearUser, setUser } from '@gt-motive-app/store';
import { Store } from '@ngrx/store';
import { Observable, delay, map, of } from 'rxjs';

@Injectable()
export class AuthService {
  private store: Store = inject(Store)
  
  public logIn(userName: string, password: string): Observable<LoginResponseDto> {
    const request: LoginRequestDto = {
      userName,
      password
    };

    const resp = { status: (request.userName === 'demo' && request.password === 'demo')} as LoginResponseDto;

    return of(resp).pipe(
      map((resp) => {
        this.store.dispatch(setUser({ user: resp}))
        return resp
      }),
      delay(2000),
    )
  }

  public logOut(): void {
    this.store.dispatch(clearUser())
  }
}
