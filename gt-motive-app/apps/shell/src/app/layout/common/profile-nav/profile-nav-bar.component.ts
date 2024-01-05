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
  private store: Store = inject(Store);
  private router: Router = inject(Router)

  public isUserLogged$ = this.store.select(getIsUserLogged)

  public logOut() {
    this.authService.logOut();
    this.router.navigate([AppRoutes.Login])
  }
}
