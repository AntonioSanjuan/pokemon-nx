import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@gt-motive-app/ui';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutes, PokemonResponseDto } from '@gt-motive-app/libs/models';

@Component({
  selector: 'gt-motive-app-pokemon-details-info',
  imports: [
    CommonModule,
    UiModule,
    TranslateModule,
  ],
  templateUrl: './pokemon-details-info.component.html',
  styleUrls: ['./pokemon-details-info.component.scss'],
  standalone: true,
})
export class PokemonDetailsInfoComponent {
  @Input() pokemon?: PokemonResponseDto;
}
