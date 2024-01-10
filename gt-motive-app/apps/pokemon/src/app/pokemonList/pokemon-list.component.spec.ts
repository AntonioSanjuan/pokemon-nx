import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonCardComponent } from './pokemonCard/pokemon-card.component';
import { PokemonListFilterComponent } from './pokemonListFilter/pokemon-list-filter.component';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { BasePokemonStateMock, uiStateMock } from '@gt-motive-app/test';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { getNextPokemonListPageRequest, setSelectedPokemon } from '@gt-motive-app/store';
import { appRoutes } from '../app.routes';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('PokemonListComponent', () => {
  let actions: Observable<Action>;
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let store: MockStore;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        BrowserAnimationsModule,
        PokemonListComponent,
        PokemonListFilterComponent,
        PokemonCardComponent,
      ],
      providers:[
        provideMockActions(() => actions),
        provideMockStore({
          initialState: {...BasePokemonStateMock, ...uiStateMock}
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    store = TestBed.inject(MockStore)
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('Integration tests', () => {
    it('selectPokemon should dispatch setSelectedPokemon', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch')

      const pokemonSut = {id: 1, name: 'name' } as PokemonResponseDto;
      component.selectPokemon(pokemonSut as PokemonResponseDto)

      expect(dispatchSpy).toHaveBeenCalledWith(setSelectedPokemon({ pokemon: pokemonSut }))
    });

    describe('isIntersecting expected behaviour', () => {
      it('isIntersecting request with true prop value should dispatch getNextPokemonListPageRequest', () => {
        const dispatchSpy = jest.spyOn(store, 'dispatch')
  
        component.isIntersecting(true)
  
        expect(dispatchSpy).toHaveBeenCalledWith(getNextPokemonListPageRequest())
      });

      it('isIntersecting request with false prop value should dispatch getNextPokemonListPageRequest', () => {
        const dispatchSpy = jest.spyOn(store, 'dispatch')
  
        component.isIntersecting(false)
  
        expect(dispatchSpy).not.toHaveBeenCalledWith(getNextPokemonListPageRequest())
      });
    })

    describe('isIntersecting expected behaviour', () => {
      it('isIntersecting request with true prop value should dispatch getNextPokemonListPageRequest', () => {
        const dispatchSpy = jest.spyOn(store, 'dispatch')
  
        component.isIntersecting(true)
  
        expect(dispatchSpy).toHaveBeenCalledWith(getNextPokemonListPageRequest())
      });

      it('openPokemonDetails should navigate to pokemon details', () => {
        const pokemonSut = {id: 1, name: 'pokemonName test'} as PokemonResponseDto
        const navigateSpy = jest.spyOn(router, 'navigate')
  
        component.openPokemonDetails(pokemonSut)
  
        expect(navigateSpy).toHaveBeenCalledWith([`/pokemon/${pokemonSut.name}`])
      });
    })
  })
});
