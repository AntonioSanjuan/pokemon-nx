import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppRoutes } from '@gt-motive-app/libs/models';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { getIsUserLogged } from '@gt-motive-app/store';
import { UiModule } from '@gt-motive-app/ui';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gt-motive-app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.scss', './../menu.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    CommonModule,
    UiModule,
    RouterModule
  ]
})
export class MenuNavBarComponent {
  public appRoutes = AppRoutes
}
