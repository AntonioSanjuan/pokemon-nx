import { Injectable } from '@angular/core';
import {LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse?: LoginResponseDto;
  
  public logIn(userName: string, password: string): Observable<LoginResponseDto> {
    const request: LoginRequestDto = {
      userName,
      password
    };

    const response = { status: true} as LoginResponseDto;
    
    if(request.userName === 'demo' && request.password === 'demo') {
      this.loginResponse = {...response}
    }

    return of(response).pipe(delay(2000))

  }

  public logOut(): void {
    this.loginResponse = undefined;
  }
}
