import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparisonComponent } from './comparison.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { userStateMock } from '@gt-motive-app/test'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ComparisonComponent', () => {
  let component: ComparisonComponent;
  let fixture: ComponentFixture<ComparisonComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: { 
            ...userStateMock
          }
        }),
      ],
      imports: [
        BrowserAnimationsModule,
        ComparisonComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComparisonComponent);
    store = TestBed.inject(Store)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

  // describe('Integration tests', () => {
  //   describe('Login', () => {
  //     it('login with valid form should dispatch loginRequest', () => {
  //       const dispatchSpy = jest.spyOn(store, 'dispatch')

  //       const userNameSut = 'username test';
  //       const passwordSut = 'password test';

  //       component.loginForm.setValue({
  //         userName: userNameSut,
  //         password: passwordSut
  //       })

  //       component.login()

  //       expect(dispatchSpy).toHaveBeenCalledWith(loginRequest({
  //         loginData: {
  //           userName: userNameSut,
  //           password: passwordSut
  //         } as LoginData
  //        })
  //       )
  //     })
  //     it('login with invalid form should not dispatch loginRequest', () => {
  //       const dispatchSpy = jest.spyOn(store, 'dispatch')

  //       const userNameSut = 'username test';
  //       const passwordSut = 'password test';

  //       component.loginForm.setValue({
  //         userName: userNameSut,
  //         password: null
  //       })

  //       component.login()

  //       expect(dispatchSpy).not.toHaveBeenCalledWith(loginRequest(expect.anything())
  //       )
  //     })
  //   });
  // })

});
