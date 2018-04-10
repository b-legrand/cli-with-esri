import { NgModule } from "@angular/core";
import { AuthenticationService } from "./services/authentication.service";
import { RouterModule } from "@angular/router";
import { AuthGuardService } from "./guards/auth-guard.service";
import { IsAuthenticatedDirective } from "./directives/is-authenticated.directive";

/**
 * Module 'auth' de l'application (authentication/authorization),
 * est responsable de l'identification et des habilitations.
 */
@NgModule({
  declarations: [AuthenticationService],
  exports: [AuthGuardService, IsAuthenticatedDirective],
  imports: [RouterModule],
  providers: [AuthenticationService],
})
export class AuthModule {}
