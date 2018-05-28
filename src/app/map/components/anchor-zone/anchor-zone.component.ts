import { Component, OnInit, Input, ViewContainerRef, ViewChild } from "@angular/core";

/**
 * La zone d'ancrage permets de regrouper les fenêtres de widget dont l'état est à anchored.
 */
@Component({
  selector: "anchor-zone",
  templateUrl: "./anchor-zone.component.html",
  styleUrls: ["./anchor-zone.component.scss"],
})
export class AnchorZoneComponent implements OnInit {
  @ViewChild("vc", { read: ViewContainerRef })
  viewContainerRef: ViewContainerRef;

  /**
   * Position ('left' ou 'right')
   */
  @Input() public position: string;

  /**
   * Largeur de la zone.
   * à terme, à rendre responsive avec le BreakpointObserver d'@angular/cdk
   */
  @Input() public width = 320;

  public scrollEnabled = false;

  /**
   * Styles scss appliquées sur la zone, ici car on enlève left or right dynamiquement selon la position
   */
  public zoneStyle: any = {
    left: "62px",
    right: "62px",
    position: "absolute",
    top: "calc(2.5em + 15px)",
    bottom: "15px",
    height: "calc(100vh  - 2.5em  - 15px * 2)",
  };

  constructor() {}

  /**
   * initialize la zone selon le paramètre position.
   * valeurs possible : left, right ou rien (free zone)
   */
  ngOnInit() {
    if (this.position === "left") {
      delete this.zoneStyle.right;
      this.zoneStyle["width.px"] = this.width;
    }
    if (this.position === "right") {
      delete this.zoneStyle.left;
      this.zoneStyle["width.px"] = this.width;
    }
  }
}
