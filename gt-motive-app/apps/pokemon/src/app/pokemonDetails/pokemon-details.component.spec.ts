import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsHeaderComponent } from './pokemonDetailsHeader/pokemon-details-header.component';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initialPokemonState } from '../+state/models/pokemonState.initialState';

describe('PokemonDetailsComponent', () => {
  let actions: Observable<Action>;
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PokemonDetailsComponent,
        PokemonDetailsHeaderComponent
      ],
      providers:[
        provideMockActions(() => actions),
        provideMockStore({
          initialState: initialPokemonState
        }),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    store = TestBed.inject(MockStore)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Unit tests', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  })
});
