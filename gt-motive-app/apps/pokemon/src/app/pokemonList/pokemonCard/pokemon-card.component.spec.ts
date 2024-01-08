import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { PokemonIdDirective } from '@gt-motive-app/ui';
import { appRoutes } from '../../app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let router: Router;

  const inputPokemonSut = {
    sprites:{ other: { 'official-artwork': { front_default: 'testUrl'}}}
  } as PokemonResponseDto;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        BrowserAnimationsModule,
        PokemonIdDirective,
        PokemonCardComponent,
        RouterTestingModule.withRoutes(appRoutes)
      ]
    });
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = inputPokemonSut
    fixture.detectChanges();
    router = TestBed.inject(Router);

  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('togle should switch animationActive property', () => {
      const animationActiveStatus = component.animationActive

      component.toggle()

      expect(component.animationActive).toEqual(!animationActiveStatus)
    });
    
    it('getImage should return right sprite', () => {
      const image = component.getImage()

      expect(image).toEqual(inputPokemonSut.sprites.other['official-artwork'].front_default)
    });
  })
});