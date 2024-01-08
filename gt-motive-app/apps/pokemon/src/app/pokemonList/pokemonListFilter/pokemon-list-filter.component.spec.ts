import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListFilterComponent } from './pokemon-list-filter.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PokemonTypePillComponent } from '@gt-motive-app/components';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BasePokemonStateMock } from '@gt-motive-app/test'
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonType } from '@gt-motive-app/libs/models';
import { updatePokemonTypeFilter } from '@gt-motive-app/store';

describe('PokemonListFilterComponent', () => {
  let actions: Observable<Action>;
  let component: PokemonListFilterComponent;
  let fixture: ComponentFixture<PokemonListFilterComponent>;
  let router: Router
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonListFilterComponent,
        PokemonTypePillComponent,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
      ],
      providers:[
        provideMockActions(() => actions),
        provideMockStore({
          initialState: BasePokemonStateMock
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListFilterComponent);
    store = TestBed.inject(MockStore)
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    
    it('toggle should switch collapsed prop value', () => {
      const initialCollapsedValue = component.collapsed;

      component.toggle()

      expect(component.collapsed).toEqual(!initialCollapsedValue)
    });
  })

  describe('Integration tests', () => {
    it('filterByPokemonType should dispatch updatePokemonTypeFilter', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch')

      const pokemonTypeSut = { name: 'test' } as PokemonType
      component.filterByPokemonType(pokemonTypeSut)

      expect(dispatchSpy).toHaveBeenCalledWith(updatePokemonTypeFilter({ 
        selectedPokemonType: pokemonTypeSut
      }))
    });

    
    it('clearPokemonTypeFilter should dispatch updatePokemonTypeFilter', () => {
      const dispatchSpy = jest.spyOn(store, 'dispatch')

      const pokemonTypeSut = { name: 'test' } as PokemonType
      component.filterByPokemonType(pokemonTypeSut)

      expect(dispatchSpy).toHaveBeenCalledWith(updatePokemonTypeFilter({ 
        selectedPokemonType: pokemonTypeSut
      }))
    });

    it('searchPokemon should request navigation to Pokemon Details', () => {
      const navigateSpy = jest.spyOn(router, 'navigate')

      const searchSut = 'testing search'
      component.filterByText = searchSut
      component.searchPokemon()

      expect(navigateSpy).toHaveBeenCalledWith([`/pokemon/${searchSut}`])
    });
  })
});
