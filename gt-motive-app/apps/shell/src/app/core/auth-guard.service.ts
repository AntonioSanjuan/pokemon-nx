import { Injectable, inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { getUser } from "@gt-motive-app/store";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthenticateGuard {
    private authService: AuthService = inject(AuthService)
    private store: Store = inject(Store)
    private router: Router = inject(Router)
    private route: ActivatedRoute = inject(ActivatedRoute)
    private user: any;

    private user$ = this.store.select(getUser).subscribe((user) => {
        this.user = user;
    })
    
    canActivate(): Observable<boolean> {
        if(!this.user) {
            this.router.navigate(['account/login'], {relativeTo: this.route})
            return of(false)
        }
        return of(true)
    }
}