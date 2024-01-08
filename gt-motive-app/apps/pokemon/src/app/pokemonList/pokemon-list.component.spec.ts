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

describe('PokemonListComponent', () => {
  let actions: Observable<Action>;
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
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
  })
});
