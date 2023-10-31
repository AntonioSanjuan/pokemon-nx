import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuBottomComponent } from './menu-bottom.component';

describe('MenuBottomComponent', () => {
  let component: MenuBottomComponent;
  let fixture: ComponentFixture<MenuBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBottomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
