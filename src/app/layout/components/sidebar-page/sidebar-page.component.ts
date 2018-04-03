import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

export enum SidebarSize {
  small = "sm",
  medium = "md",
  large = "lg",
}

/**
 * composant page / sidebar :
 *
 * Affiche le contenu dans une sidebar primeng : https://www.primefaces.org/primeng/#/sidebar
 *
 */
@Component({
  selector: "sidebar-page",
  templateUrl: "./sidebar-page.component.html",
  styleUrls: ["./sidebar-page.component.scss"],
})
export class SidebarPageComponent {
  @Input() public size: SidebarSize;

  @Input() public style: any;

  /**
   * left ou right
   */
  @Input() public position = "right";

  @Input() public fullscreen: boolean;

  @Input() public scrollable: boolean;

  constructor(private router: Router) {}

  handleSidebarClose(event: any) {
    // Retourne à la carte en vidant la zone sidebar
    this.router.navigate(["/"]);
  }
}
