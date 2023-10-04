import { Injectable, inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '@gt-motive-app/libs/services/auth';
import { Observable, of } from "rxjs";

@Injectable()
export class AuthenticateGuard {
    public authService = inject(AuthService)
    public router = inject(Router)
    public route = inject(ActivatedRoute)

    canActivate(): Observable<boolean> {
        if(!this.authService.loginResponse) {
            this.router.navigate(['account/login'], {relativeTo: this.route})
            return of(false)
        }
        return of(true)
    }
}