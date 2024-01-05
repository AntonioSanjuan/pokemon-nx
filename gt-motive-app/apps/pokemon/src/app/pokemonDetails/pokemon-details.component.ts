import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { UiModule } from '@gt-motive-app/ui';
import { selectPokemonDetails } from './state/pokemonDetails.selectors';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonDetailsHeaderComponent } from './pokemonDetailsHeader/pokemon-details-header.component';

@Component({
  selector: 'gt-motive-app-pokemon-details',
  imports: [
    CommonModule,
    LetDirective,
    UiModule,
    PokemonDetailsHeaderComponent
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  standalone: true,
})
export class PokemonDetailsComponent {
  private store = inject(Store)
  public pokemonDetails$ = this.store.select(selectPokemonDetails)
}
