import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { clearPokemonList, getNextPokemonListPageRequest, getPokemonListRequest, setSelectedPokemon } from './store/pokemonList.actions';
import { selectPokemonList, selectPokemonSelected } from './store/pokemonList.selectors';
import { LetDirective } from '@ngrx/component';
import { PokemonDto } from '../shared/services/Pokemon/models/pokemonsResponseDto.model';
import { UiModule } from '@gt-motive-app/ui';

@Component({
  selector: 'gt-motive-app-pokemon-list',
  imports: [
    CommonModule,
    LetDirective,
    UiModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  standalone: true,
})
export class PokemonListComponent implements OnInit {
  private store = inject(Store)
  public pokemonList$ = this.store.select(selectPokemonList)
  public pokemonSelected$ = this.store.select(selectPokemonSelected)
  public displayedColumns: string[] = ['name'];

  ngOnInit(): void {
      this.store.dispatch(clearPokemonList())
      this.store.dispatch(getPokemonListRequest())
  }
  
  public getNextPage() {
    this.store.dispatch(getNextPokemonListPageRequest())
  }

  public selectPokemon(pokemon: PokemonDto) {
    this.store.dispatch(setSelectedPokemon({ pokemon }))
  }

  public isPokemonSelected(pokemon: PokemonDto) {
    
  }
}
