import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProfileNavBarComponent } from './profile-nav-bar.component';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { userStateMock } from '@gt-motive-app/test';
import { CultureService } from '@gt-motive-app/libs/services/culture';

describe('ProfileNavBarComponent', () => {
  let component: ProfileNavBarComponent;
  let fixture: ComponentFixture<ProfileNavBarComponent>;
  let store: Store;
  let authService: AuthService;
  let translateService: TranslateService;
  let cultureService: CultureService;
  let actions: Observable<Action>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProfileNavBarComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader}
      })
      ],
      providers: [
        AuthService,
        CultureService,
        provideMockActions(() => actions),
        provideMockStore({
          initialState: userStateMock
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileNavBarComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store)
    authService = TestBed.inject(AuthService)
    cultureService = TestBed.inject(CultureService)
    translateService = TestBed.inject(TranslateService)
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('Integration tests', () => {
    it('logOut should request authService logout', () => {
      const authServiceLogOutSpy = jest.spyOn(authService, 'logOut')
      component.logOut();
      expect(authServiceLogOutSpy).toHaveBeenCalled()
    });
  })
});
