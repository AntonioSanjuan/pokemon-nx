import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LoginRequestDto} from '@gt-motive-app/libs/models'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false)
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  
  public logIn(userName: string, password: string): void {
    const request: LoginRequestDto = {
      userName,
      password
    };
    console.log("eeeepa in")
    if(userName === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true)
    }
  }

  public logOut(): void {
    console.log("eeeepa out")

    this.isUserLoggedIn.next(false)
  }
}
