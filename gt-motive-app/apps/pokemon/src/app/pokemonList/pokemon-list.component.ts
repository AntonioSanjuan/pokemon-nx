import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { clearPokemonList, getNextPokemonListPageRequest, getPokemonListRequest } from './store/pokemonList.actions';
import { selectPokemonList } from './store/pokemonList.selectors';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'gt-motive-app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    LetDirective
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  private store = inject(Store)
  public pokemonList$ = this.store.select(selectPokemonList)

  ngOnInit(): void {
      this.store.dispatch(clearPokemonList())
      this.store.dispatch(getPokemonListRequest())
  }
  
  public getNextPage() {
    this.store.dispatch(getNextPokemonListPageRequest())
  }
}
