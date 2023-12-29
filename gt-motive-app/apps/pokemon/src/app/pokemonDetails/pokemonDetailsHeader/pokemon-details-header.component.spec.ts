import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsHeaderComponent } from './pokemon-details-header.component';

describe('PokemonDetailsHeaderComponent', () => {
  let component: PokemonDetailsHeaderComponent;
  let fixture: ComponentFixture<PokemonDetailsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
