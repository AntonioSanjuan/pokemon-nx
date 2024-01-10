import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule } from '@gt-motive-app/ui';
import { getIsBlockByRequest, getNextPokemonListPageRequest, selectPokemonList, selectPokemonQuery, selectPokemonSelected, setSelectedPokemon } from '@gt-motive-app/store';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonListFilterComponent } from './pokemonListFilter/pokemon-list-filter.component';
import { PokemonCardComponent } from './pokemonCard/pokemon-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-motive-app-pokemon-list',
  imports: [
    CommonModule,
    LetDirective,
    UiModule,
    PokemonListFilterComponent,
    PokemonCardComponent,
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


  public selectPokemon(pokemon: PokemonResponseDto): void {
    this.store.dispatch(setSelectedPokemon({ pokemon }))
  }

  public isIntersecting(isIntersecting: boolean): void {
    if (isIntersecting) {
      // Load more data, update the UI, etc.
      this.store.dispatch(getNextPokemonListPageRequest())
    }
  }

  public openPokemonDetails(pokemon: PokemonResponseDto): void {
    this.router.navigate([`/pokemon/${pokemon.name}`])

  }
}
