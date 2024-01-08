import { TestBed } from "@angular/core/testing";
import { AuthenticateGuard } from "./auth-guard.service";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AuthService } from "@gt-motive-app/libs/services/auth";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { appRoutes } from "../app.routes";
import { Observable } from "rxjs";
import { Action } from '@ngrx/store';
import { provideMockActions } from "@ngrx/effects/testing";
import { userStateMock } from "@gt-motive-app/test";
import { AppRoutes, LoginResponseDto } from "@gt-motive-app/libs/models";
import { UserState, getUser } from "@gt-motive-app/store";

describe('AuthenticateGuard', () => {
    let actions: Observable<Action>;
    let guard: AuthenticateGuard;
    let store: MockStore;
    let authService: AuthService;
    let router: Router;
  
    beforeEach(() => {
  
      TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes(appRoutes),
        ],
        providers:[
            AuthenticateGuard,
            AuthService,
            provideMockActions(() => actions),
            provideMockStore({
              initialState: userStateMock
            }),
          ]
      });
  
      guard = TestBed.inject(AuthenticateGuard);
      authService = TestBed.inject(AuthService)
      store = TestBed.inject(MockStore)
      router = TestBed.inject(Router)
    });
    describe('Unit tests', () => {
        it('should be created', () => {
        expect(guard).toBeTruthy();
      });
    })
  
    describe('Integration tests', () => {
        it('should request checkAuthPersistance', (done) => {
            const checkAuthPersistanceSpy = jest.spyOn(authService, 'checkAuthPersistance')
  
            guard.canActivate().subscribe((result) => {
                expect(checkAuthPersistanceSpy).toHaveBeenCalled();
                done();
            });
        });


        describe('Guard access', () => {
            it('should not allow access & navigate to login if user is not authenticated', (done) => {
                const navigateSpy = jest.spyOn(router, 'navigate')
      
                guard.canActivate().subscribe((result) => {
                    expect(result).toBe(false);
                    expect(navigateSpy).toHaveBeenCalledWith([AppRoutes.Login], expect.anything());
                    done();
                });
            });

            it('should allow access user is authenticated', (done) => {      
                store.overrideSelector(getUser, {status: true} as LoginResponseDto)
                guard.canActivate().subscribe((result) => {
                    expect(result).toBe(true);
                    done();
                });
            });
        })

    })

  
    // it('should allow access if user is authenticated', (done) => {
    //   const getUserMock = of({ name: 'TestUser' }); // Simulate user logged in
    //   storeMock.select.and.returnValue(getUserMock);
  
    //   guard.canActivate().subscribe((result) => {
    //     expect(result).toBe(true);
    //     expect(routerMock.navigate).not.toHaveBeenCalled();
    //     done();
    //   });
    // });
  });