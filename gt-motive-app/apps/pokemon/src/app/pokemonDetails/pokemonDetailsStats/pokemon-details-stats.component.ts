import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@gt-motive-app/ui';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonResponseDto } from '@gt-motive-app/libs/models';

@Component({
  selector: 'gt-motive-app-pokemon-details-stats',
  imports: [
    CommonModule,
    UiModule,
    TranslateModule,
  ],
  templateUrl: './pokemon-details-stats.component.html',
  styleUrls: ['./pokemon-details-stats.component.scss'],
  standalone: true,
})
export class PokemonDetailsStatsComponent {
  @Input() pokemon?: PokemonResponseDto;
}
