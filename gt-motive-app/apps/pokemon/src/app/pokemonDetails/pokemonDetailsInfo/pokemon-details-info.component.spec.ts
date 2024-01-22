import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsInfoComponent } from './pokemon-details-info.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('PokemonDetailsInfoComponent', () => {
  let component: PokemonDetailsInfoComponent;
  let fixture: ComponentFixture<PokemonDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonDetailsInfoComponent,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader}
        }),
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
