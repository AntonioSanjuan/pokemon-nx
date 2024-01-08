import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseLayoutComponent } from './base-layout.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { userStateMock } from '@gt-motive-app/test';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
        provideMockStore({
          initialState: userStateMock
        }),
      ],
      imports: [
        RouterOutlet,
        RouterTestingModule,
        BaseLayoutComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseLayoutComponent);
    store = TestBed.inject(Store)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
});
