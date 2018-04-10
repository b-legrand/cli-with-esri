import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

/**
 * Permets d'empêcher l'accès aux routes angular si l'utilisateur n'est pas identifié.
 */
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private logger: Logger,
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      return false;
    }
    return true;
  }
}
