import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { PathMap } from '../app-routing.module';

/**
 * Guard for checking if the user is authenticated.
 */
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {}

    /**
     * Check if the user is authenticated. only then the routes can be activated.
     */
    canActivate(): boolean {
        if (!this.auth.isAuthenticated() &&
            !this.router.url.includes(PathMap.loginPath) &&
            !this.router.url.includes(PathMap.registerPath)) {
                this.router.navigate(['login']);
                return false;
        }
        return true;
    }
}
