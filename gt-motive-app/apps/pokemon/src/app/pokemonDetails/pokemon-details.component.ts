import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { PokemonIdDirective, UiModule } from '@gt-motive-app/ui';
import { selectPokemonDetails } from './state/pokemonDetails.selectors';
import { PokemonDetailsHeaderComponent } from './pokemonDetailsHeader/pokemon-details-header.component';
import { PokemonTypePillComponent } from '@gt-motive-app/components';
import { PokemonDetailsInfoComponent } from './pokemonDetailsInfo/pokemon-details-info.component';
import { PokemonDetailsStatsComponent } from './pokemonDetailsStats/pokemon-details-stats.component';

@Component({
  selector: 'gt-motive-app-pokemon-details',
  imports: [
    CommonModule,
    LetDirective,
    PokemonIdDirective,
    UiModule,
    PokemonDetailsHeaderComponent,
    PokemonTypePillComponent,
    PokemonDetailsInfoComponent,
    PokemonDetailsStatsComponent
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  standalone: true,
})
export class PokemonDetailsComponent {
  private store = inject(Store)
  public pokemonDetails$ = this.store.select(selectPokemonDetails)
}
