import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsStatsComponent } from './pokemon-details-stats.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('PokemonDetailsStatsComponent', () => {
  let component: PokemonDetailsStatsComponent;
  let fixture: ComponentFixture<PokemonDetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonDetailsStatsComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader}
        }),
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
