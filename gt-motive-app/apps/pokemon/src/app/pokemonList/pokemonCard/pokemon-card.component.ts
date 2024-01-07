import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';
import { PokemonIdDirective, UiModule, shakeAnimation } from '@gt-motive-app/ui';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { PokemonTypePillComponent } from '@gt-motive-app/components'

@Component({
  selector: 'gt-motive-app-pokemon-card',
  imports: [
    CommonModule,
    LetDirective,
    PokemonIdDirective,
    PokemonTypePillComponent,
    UiModule
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  animations: [shakeAnimation],
  standalone: true,
})
export class PokemonCardComponent {
  @Input() public pokemon!: PokemonResponseDto;
  @Input() public isLoading!: boolean;

  public animationActive = false;

  public toggle(): void {
    this.animationActive = !this.animationActive;
  }

  public getImage(): string {
    return this.pokemon.sprites.other['official-artwork'].front_default
  }
}
