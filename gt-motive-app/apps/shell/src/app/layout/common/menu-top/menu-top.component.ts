import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { getIsUserLogged } from '@gt-motive-app/store';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gt-motive-app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss', './../menu.scss'],
  standalone: true,
  imports: [
    TranslateModule,
    LetDirective,
    CommonModule,
    RouterModule
  ]
})
export class MenuTopComponent {
  private authService: AuthService = inject(AuthService)
  private store: Store = inject(Store);
  private router: Router = inject(Router)
  private route: ActivatedRoute = inject(ActivatedRoute)

  public isUserLogged$ = this.store.select(getIsUserLogged)

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['account/login'], {relativeTo: this.route})
  }
}
