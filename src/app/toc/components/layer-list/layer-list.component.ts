import { Component, Input, Output, EventEmitter } from "@angular/core";

/**
 * Composant générique affichant une liste de couches filtrables.
 */
@Component({
  selector: "layer-list",
  templateUrl: "./layer-list.component.html",
  styleUrls: ["./layer-list.component.scss"],
})
export class LayerListComponent {
  /**
   * TODO US183/widget-toc injecter les layers esri depuis le composant appelant.
   * Gérer une liste filtréée à passer à <filtered-layer-list>
   */
  @Input() public layers: __esri.FeatureLayer[];

  /**
   * Echelle de la carte, optionnel, si pas renseigné, les couches non visibles à l'échelle.
   */
  @Input() public scale: number;

  @Output() public nodeSelect: EventEmitter<any> = new EventEmitter<any>();

  @Output() public nodeUnselect: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Texte saisi par l'utilisateur pour filtrer les couches.
   */
  public filterText: string;

  public handleFilterChange($event: any): void {
    this.filterText = $event.target.value;
    // TODO US187 : mettre en oeuvre le filtrage de l'arbre (layers => filteredLayers à passer à filtered-layer-list)
  }

  public handleNodeSelect($event: any): void {
    this.nodeSelect.emit($event);
  }

  public handleNodeUnselect($event: any): void {
    this.nodeUnselect.emit($event);
  }
}
