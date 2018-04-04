import { Component, Input, OnInit } from "@angular/core";

/**
 * composant s
 */
@Component({
  selector: "table-of-contents",
  templateUrl: "./layer-list.html",
  styleUrls: ["./layer-list.component.scss"],
})
export class LayerListComponent implements OnInit {
  /**
   * Todo injecter les layers esri depuis le composant appelant.
   * Gérer une liste filtréée à passer à <filtered-layer-list>
   */
  @Input() public layers: __esri.FeatureLayer[];

  /**
   * Echelle de la carte, optionnel, si pas renseigné, les couches non visibles à l'échelle.
   */
  @Input() public scale: number;

  /**
   * Texte saisi par l'utilisateur pour filtrer les couches.
   */
  public filterText: string;

  constructor() {}

  ngOnInit() {}

  handleFilterChange($event) {
    this.filterText = $event.target.value;
  }

  handleNodeSelect($event: any) {
    // todo remonter l'évènement au parent.
    console.dir($event);
  }

  handleNodeUnselect($event: any) {
    // todo remonter l'évènement au parent.
    console.dir($event);
  }
}
