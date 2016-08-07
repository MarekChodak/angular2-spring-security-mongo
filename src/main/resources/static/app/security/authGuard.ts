import {Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs/Rx";
import {RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable()
export class AuthGuard {
    constructor(private router: Router, protected authService: AuthenticationService)
    {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (state.url !== '/' && !this.authService.authenticated) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}