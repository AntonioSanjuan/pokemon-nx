import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsStatsComponent } from './pokemon-details-stats.component';

describe('PokemonDetailsStatsComponent', () => {
  let component: PokemonDetailsStatsComponent;
  let fixture: ComponentFixture<PokemonDetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonDetailsStatsComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
