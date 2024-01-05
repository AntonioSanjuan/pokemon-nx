import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '../../../app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileNavBarComponent } from './profile-nav-bar.component';

describe('ProfileNavBarComponent', () => {
  let component: ProfileNavBarComponent;
  let fixture: ComponentFixture<ProfileNavBarComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProfileNavBarComponent,
        RouterTestingModule.withRoutes(appRoutes),
        TranslateModule.forRoot()
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileNavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
