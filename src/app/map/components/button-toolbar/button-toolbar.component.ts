import { Component, Input, OnInit } from "@angular/core";

/**
 * Composant barre d'outils, regroupe les expand-button ou les boutons esri.
 *
 * TODO doit surveiller les resize de la page pour mettre dans un bouton 'plus' ceux qui dépassent.
 */
@Component({
  selector: "button-toolbar",
  styleUrls: ["./button-toolbar.component.scss"],
  templateUrl: "./button-toolbar.component.html",
})
export class ButtonToolbarComponent implements OnInit {
  @Input() public orientation: string = "vertical";

  constructor() {
    // valeurs
  }

  ngOnInit() {}
}
