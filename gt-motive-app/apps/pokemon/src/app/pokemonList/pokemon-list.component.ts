import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule } from '@gt-motive-app/ui';
import { getIsBlockByRequest, getNextPokemonListPageRequest, selectPokemonList, selectPokemonQuery, selectPokemonSelected, setSelectedPokemon, updatePokemonListQueryFilters } from '@gt-motive-app/store';
import { PokemonMinifiedDto, PokemonQueryFilters } from '@gt-motive-app/libs/models';
import { Router } from '@angular/router';

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
export class PokemonListComponent {
  private store: Store = inject(Store)
  private router: Router = inject(Router)
  public pokemonList$ = this.store.select(selectPokemonList)
  public pokemonQuery$ = this.store.select(selectPokemonQuery)
  public pokemonSelected$ = this.store.select(selectPokemonSelected)
  public isBlockByRequest$ = this.store.select(getIsBlockByRequest)
  
  public displayedColumns: string[] = ['name'];

  //filters
  public filterByText = '';

  public selectPokemon(pokemon: PokemonMinifiedDto) {
    this.store.dispatch(setSelectedPokemon({ pokemon }))
  }

  public applyFilter(filters: PokemonQueryFilters) {
    this.store.dispatch(updatePokemonListQueryFilters({ filters: {
      ...filters,
      byText: this.filterByText
    }}))
  }
  
  
  public searchPokemon() {
    this.router.navigate([`/pokemon/${this.filterByText}`])
  }

  public clearFilter() {}

  isIntersecting(isIntersecting: any) {
    if (isIntersecting) {
      // Load more data, update the UI, etc.
      this.store.dispatch(getNextPokemonListPageRequest())
    }
  }
}
