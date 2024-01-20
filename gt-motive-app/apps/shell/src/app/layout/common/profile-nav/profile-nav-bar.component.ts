import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { CultureService } from '@gt-motive-app/libs/services/culture';
import { getIsUserLogged } from '@gt-motive-app/store';
import { UiModule } from '@gt-motive-app/ui';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'gt-motive-app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.scss', './../menu.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    LetDirective,
    CommonModule,
    UiModule,
    RouterModule
  ]
})
export class ProfileNavBarComponent {
  private authService: AuthService = inject(AuthService)
  public translateService: TranslateService = inject(TranslateService)
  private cultureService: CultureService = inject(CultureService);

  private store: Store = inject(Store);

  public isUserLogged$ = this.store.select(getIsUserLogged)

  public logOut() {
    this.authService.logOut();
  }

  public changeLanguage(lang: string) {
    console.log("lang", lang)
    this.cultureService.changeLanguage(lang)
  }
}
