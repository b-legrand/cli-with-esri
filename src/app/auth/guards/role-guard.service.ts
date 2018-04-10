import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '@condor/common';

@Injectable()
export class RoleGuardService implements CanActivate {

    constructor(private authService: AuthenticationService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const expectedRoles = route.data.roles;

        let currentUser = this.authService.currentUser;

        if (!this.authService.isAuthenticated() || !expectedRoles.contains(currentUser.role)) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}