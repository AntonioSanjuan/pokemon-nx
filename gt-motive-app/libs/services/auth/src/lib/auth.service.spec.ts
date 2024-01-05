import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { AppInit, loadedApp, setUser, userInitialState } from '@gt-motive-app/store';
import { AppRoutes, LoginResponseDto } from '@gt-motive-app/libs/models';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let store: Store;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore({
          initialState: userInitialState
        }),
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    });
    service = TestBed.inject(AuthService);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  describe('Unit tests', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('Integration tests', () => {
    describe('Login', () => {
      const userNameSut = 'userNameTest'
      const userPassSut = '****'

      it('Login success should authenticate user', () => {
        const dispatchSpy = jest.spyOn(store, 'dispatch')
        service.logIn(userNameSut, userPassSut).subscribe((resp: LoginResponseDto) => {
          expect(dispatchSpy).toHaveBeenCalledWith(setUser({ user: resp}))
          expect(dispatchSpy).toHaveBeenCalledWith(loadedApp({initialized: AppInit.ACCOUNT}))
        })
      })
      it('Login success should redirect to Home', () => {

        const navigateSpy = jest.spyOn(router, 'navigate')
        service.logIn(userNameSut, userPassSut).subscribe((_) => {
          expect(navigateSpy).toHaveBeenCalledWith([AppRoutes.Home])
        })
      })
    })
  })
});
