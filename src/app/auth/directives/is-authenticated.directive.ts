import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

/**
 * Directive structurelle permettant de ne pas afficher un élément si l'utlisateur n'est pas authentifié.
 *
 */
@Directive({
  selector: "[isAuthenticated]",
})
export class IsAuthenticatedDirective implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  public ngOnInit(): void {
    this.checkAuthentication();
  }

  private checkAuthentication(): void {
    if (this.authService.isAuthenticated()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
