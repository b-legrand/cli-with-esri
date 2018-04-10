import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ANONYMOUS_USER, User } from "../models/user";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { ProfileService } from "./profile.service";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

/**
 * Service chargé de fournir un utilisateur authentifié ou non aux appelants.
 *
 * Adapté depuis le AuthenticationService du kit-condor.
 *
 * Il stocke les informations et habilitations d'un utilisateur connecté.
 *
 * ## Usage
 *
 *
 */
@Injectable()
export class AuthenticationService {
  private currentUser: Subject<User> = new BehaviorSubject(
    new User(ANONYMOUS_USER),
  );
  private authenticated: boolean;
  constructor(
    private cookieService: CookieService,
    private profileService: ProfileService,
  ) {
    this.loadCurrentUser();
  }

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public loadCurrentUser(): void {
    // todo a terme ajouter un appel de habilitationservice
    this.profileService
      .getInformationsUtilisateur("GAI", "profilfull")
      .subscribe(data => {
        const user = new User({
          infos: data,
          isAnonymous: false,
        });
        this.authenticated = true;
        this.currentUser.next(user);
      });
  }

  public logout(): void {
    this.currentUser.next(new User(ANONYMOUS_USER));
    // todo evenement logout pour supprimer localStorage.
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
