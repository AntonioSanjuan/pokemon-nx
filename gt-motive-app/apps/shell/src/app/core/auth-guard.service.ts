import { Injectable, inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AppRoutes } from "@gt-motive-app/libs/models";
import { AuthService } from "@gt-motive-app/libs/services/auth";
import { getUser } from "@gt-motive-app/store";
import { Store } from "@ngrx/store";
import { Observable, filter, map, of, take } from "rxjs";

@Injectable()
export class AuthenticateGuard {
    private store: Store = inject(Store)
    private router: Router = inject(Router)
    private route: ActivatedRoute = inject(ActivatedRoute)
    private authService: AuthService = inject(AuthService)

    canActivate(): Observable<boolean> {
        this.authService.checkAuthPersistance()

        return this.store.select(getUser).pipe(
            map((user) => {
                if(!user) {
                    this.router.navigate([AppRoutes.Login], {relativeTo: this.route})
                    return false
                }
                return true
            })
        )
    }
}