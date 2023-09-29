import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LoginRequestDto, LoginResponseDto} from '@gt-motive-app/libs/models'
@Injectable()
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false)
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  
  public logIn(userName: string, password: string): void {
    const request: LoginRequestDto = {
      userName,
      password
    };
    console.log("login", request)
    if(userName === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true)
    }
  }

  public logOut(): void {
    console.log("eeeepa out")

    this.isUserLoggedIn.next(false)
  }
}
