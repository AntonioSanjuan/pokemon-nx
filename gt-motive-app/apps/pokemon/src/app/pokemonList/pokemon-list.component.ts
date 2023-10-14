import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { clearPokemonList, getNextPokemonListPageRequest, getPokemonListRequest } from './store/pokemonList.actions';

@Component({
  selector: 'gt-motive-app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  private store = inject(Store)

  ngOnInit(): void {
      this.store.dispatch(clearPokemonList())
      this.store.dispatch(getPokemonListRequest())
  }
  
}
