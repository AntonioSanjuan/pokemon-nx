import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject<boolean>(false)
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  
  public logIn(username: string, password: string): void {
    console.log("eeeepa in")
    if(username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true)
    }
  }

  public logOut(): void {
    console.log("eeeepa out")

    this.isUserLoggedIn.next(false)
  }
}
