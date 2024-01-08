import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule, collapseAnimation, rotateAnimation } from '@gt-motive-app/ui';
import { selectPokemonQuery, selectPokemonTypesFiltersState, updatePokemonTypeFilter } from '@gt-motive-app/store';
import { PokemonType } from '@gt-motive-app/libs/models';
import { PokemonTypePillComponent } from '@gt-motive-app/components';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-motive-app-pokemon-list-filter',
  imports: [
    CommonModule,
    LetDirective,
    PokemonTypePillComponent,
    UiModule
  ],
  templateUrl: './pokemon-list-filter.component.html',
  styleUrls: ['./pokemon-list-filter.component.scss'],
  animations: [rotateAnimation, collapseAnimation],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class PokemonListFilterComponent {
  private store: Store = inject(Store)
  private router: Router = inject(Router)
  public pokemonTypes$ = this.store.select(selectPokemonTypesFiltersState)
  public pokemonQuery$ = this.store.select(selectPokemonQuery)

  //filters
  public collapsed = true;
  public filterByText = '';

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public filterByPokemonType(pokemonType: PokemonType): void {
    this.store.dispatch(updatePokemonTypeFilter({ 
      selectedPokemonType: pokemonType
    }))
  }
  
  public clearPokemonTypeFilter(pokemonType: PokemonType): void {
    this.store.dispatch(updatePokemonTypeFilter({
      selectedPokemonType: pokemonType
    }))
  }
  
  public searchPokemon(): void {
    this.router.navigate([`/pokemon/${this.filterByText}`])
  }
}
