import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@gt-motive-app/ui';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutes } from '@gt-motive-app/libs/models';

@Component({
  selector: 'gt-motive-app-pokemon-details-header',
  imports: [
    CommonModule,
    UiModule,
    TranslateModule,
    RouterModule
  ],
  templateUrl: './pokemon-details-header.component.html',
  styleUrls: ['./pokemon-details-header.component.scss'],
  standalone: true,
})
export class PokemonDetailsHeaderComponent {
  public appRoutes = AppRoutes
}
