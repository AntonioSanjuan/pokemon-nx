import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { PokemonTypePillDirective, UiModule } from '@gt-motive-app/ui';
import { PokemonType } from '@gt-motive-app/libs/models';

@Component({
  selector: 'gt-motive-app-pokemon-type-pill',
  imports: [
    CommonModule,
    LetDirective,
    PokemonTypePillDirective,
    UiModule
  ],
  templateUrl: './pokemon-type-pill.component.html',
  styleUrls: ['./pokemon-type-pill.component.scss'],
  standalone: true,
})
export class PokemonTypePillComponent {
  @Input() public pokemonType!: PokemonType;
}
