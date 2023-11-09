import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { clearPokemonList, getNextPokemonListPageRequest, getPokemonListRequest, setSelectPokemon } from './store/pokemonList.actions';
import { selectPokemonList } from './store/pokemonList.selectors';
import { LetDirective } from '@ngrx/component';
import { PokemonDto } from '../shared/services/Pokemon/models/pokemonsResponseDto.model';
import { UiModule } from '@gt-motive-app/ui';


interface PokemonListTable {
  name: string
}

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
  public dataSource: PokemonListTable[] = []
  public displayedColumns: string[] = ['name'];

  ngOnInit(): void {
      this.store.dispatch(clearPokemonList())
      this.store.dispatch(getPokemonListRequest())

      this.pokemonList$.subscribe((pokemonList: PokemonDto[]) => {
        this.dataSource = pokemonList.map((item) => {
          return { 
            name: item.name, 
          }
        })
        console.log("this.dataSource", this.dataSource)
      })
  }
  
  public getNextPage() {
    this.store.dispatch(getNextPokemonListPageRequest())
  }

  public selectPokemon(pokemon: PokemonListTable) {
    this.store.dispatch(setSelectPokemon({ pokemonName: pokemon.name }))
  }
}
