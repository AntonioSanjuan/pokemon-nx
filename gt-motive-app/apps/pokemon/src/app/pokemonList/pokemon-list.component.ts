import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule } from '@gt-motive-app/ui';
import { clearPokemonList, getNextPokemonListPageRequest, getPokemonListRequest, selectPokemonList, selectPokemonQuery, selectPokemonSelected, setSelectedPokemon } from '@gt-motive-app/store';
import { PokemonDto } from '@gt-motive-app/libs/models';

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
  public pokemonQuery$ = this.store.select(selectPokemonQuery)
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

  isIntersecting() {
    console.log("isIntersecting!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",)
    // if (isIntersecting) {
      // Load more data, update the UI, etc.
      // this.store.dispatch(getNextPokemonListPageRequest())
    // }
  }
}
