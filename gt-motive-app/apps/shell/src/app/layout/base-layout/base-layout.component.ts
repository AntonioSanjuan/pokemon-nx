import { Component, inject } from '@angular/core';
import { MenuTopComponent } from '../common/menu-top/menu-top.component';
import { MenuBottomComponent } from '../common/menu-bottom/menu-bottom.component';
import { RouterOutlet } from '@angular/router';
import { MenuNavBarComponent } from '../common/menu-nav-bar/menu-nav-bar.component';
import { ProfileNavBarComponent } from '../common/profile-nav/profile-nav-bar.component';
import { CultureService } from '@gt-motive-app/libs/services/culture';

@Component({
  selector: 'gt-motive-app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  imports: [
    RouterOutlet,
    MenuBottomComponent,
    MenuTopComponent,
    MenuNavBarComponent,
    ProfileNavBarComponent
  ],
  standalone: true
})
export class BaseLayoutComponent {
  private cultureService = inject(CultureService)

  change() {
    this.cultureService.changeLanguage('EN-GB')
  }
}
