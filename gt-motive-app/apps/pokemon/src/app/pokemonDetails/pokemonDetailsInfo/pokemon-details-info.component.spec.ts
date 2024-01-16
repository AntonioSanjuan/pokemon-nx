import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsInfoComponent } from './pokemon-details-info.component';

describe('PokemonDetailsInfoComponent', () => {
  let component: PokemonDetailsInfoComponent;
  let fixture: ComponentFixture<PokemonDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonDetailsInfoComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
