import { Injectable } from '@angular/core';
import {LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse?: LoginResponseDto;
  
  public logIn(userName: string, password: string): Observable<LoginResponseDto> {
    console.log("logIn")

    const request: LoginRequestDto = {
      userName,
      password
    };

    const response = { status: true} as LoginResponseDto
    if(request.userName === 'demo' && request.password === 'demo') {
      this.loginResponse = {...response}
    }
    return of(response)

  }

  public logOut(): void {
    console.log("logOut")
    this.loginResponse = undefined;
  }
}
