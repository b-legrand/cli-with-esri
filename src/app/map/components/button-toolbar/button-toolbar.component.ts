import { Component, Input, OnInit } from "@angular/core";

/**
 * Composant barre d'outils, regroupe les expand-button ou les boutons esri.
 *
 * TODO doit surveiller les resize de la page pour mettre dans un bouton 'plus' ceux qui dépassent.
 */
@Component({
  selector: "app-button-toolbar",
  templateUrl: "./button-toolbar.component.html",
  styleUrls: ["./button-toolbar.component.scss"],
})
export class ButtonToolbarComponent implements OnInit {
  @Input() public orientation: string = "vertical";

  constructor() {
    // valeurs
  }

  ngOnInit() {}
}
