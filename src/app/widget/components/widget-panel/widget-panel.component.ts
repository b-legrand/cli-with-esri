import { Component, Input, Inject, ViewChild } from "@angular/core";
import { APP_CONFIG, AppConfig } from "../../../core/models/app.config";
import { PerfectScrollbarDirective } from "ngx-perfect-scrollbar";

/**
 * Ce composant gère le contenu et le redimensionnement d'un wiget socle à travers :
 *
 * Il recoit et dispatche les informations.
 *
 */
@Component({
  selector: "widget-panel",
  templateUrl: "./widget-panel.component.html",
  styleUrls: ["./widget-panel.component.scss"],
})
export class WidgetPanelComponent {
  /**
   * Affiche ou non le bouton déplacer.
   */
  @Input() public resizable: boolean;

  /**
   * Active le scroll vertical.
   */
  @Input() public scrollable: boolean;

  /**
   * Taille de la fenêtre du widget.
   */
  @Input() public size: any;

  /** Présent si besoin de se rattacher aux évènements du scroll */
  @ViewChild(PerfectScrollbarDirective) scroll: PerfectScrollbarDirective;

  /**
   * Configuration de `perfect-scrollbar`
   */
  public scrollConfig: any = {
    swipeEasing: true,
    suppressScrollY: false,
    // autant qu'on peu, pas de scroll horizontal.
    suppressScrollX: false,
    // propage les évènement molette de souris aux enfants.
    wheelPropagation: true,
  };
  public themeColor: string;

  constructor(@Inject(APP_CONFIG) appConfig: AppConfig) {
    this.themeColor = appConfig.themeColor;
  }
}
