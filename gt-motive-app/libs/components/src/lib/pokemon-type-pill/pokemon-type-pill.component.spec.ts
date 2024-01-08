import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypePillComponent } from './pokemon-type-pill.component';
import { PokemonType } from '@gt-motive-app/libs/models';

describe('PokemonTypePillComponent', () => {
  let dummyPokemonType = { name: 'bug'} as PokemonType;

  let component: PokemonTypePillComponent;
  let fixture: ComponentFixture<PokemonTypePillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PokemonTypePillComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(PokemonTypePillComponent);
    component = fixture.componentInstance;
    component.pokemonType = dummyPokemonType
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
});