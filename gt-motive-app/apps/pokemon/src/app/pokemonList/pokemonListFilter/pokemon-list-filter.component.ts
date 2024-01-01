import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule, collapseAnimation, rotateAnimation } from '@gt-motive-app/ui';
import { selectPokemonQuery, selectPokemonTypesFiltersState } from '@gt-motive-app/store';
import { PokemonType } from '@gt-motive-app/libs/models';

@Component({
  selector: 'gt-motive-app-pokemon-list-filter',
  imports: [
    CommonModule,
    LetDirective,
    UiModule
  ],
  templateUrl: './pokemon-list-filter.component.html',
  styleUrls: ['./pokemon-list-filter.component.scss'],
  animations: [rotateAnimation, collapseAnimation],
  standalone: true,
})
export class PokemonListFilterComponent {
  private store: Store = inject(Store)
  public pokemonTypes$ = this.store.select(selectPokemonTypesFiltersState)
  public pokemonQuery$ = this.store.select(selectPokemonQuery)

  //filters
  public collapsed = true;

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public pokemonTypeSelected(pokemonType: PokemonType): void {
    console.log("pokemonType", pokemonType)
  }
}
