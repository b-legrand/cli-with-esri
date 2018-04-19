import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TreeNode } from "primeng/api";
import { LayerTreeNodeService } from "../../services/layer-tree-node.service";

/**
 * Composant permettant à l'utilisateur de filtrer une liste de couche.
 * gère une liste déjà filtrée en état local.
 */
@Component({
  selector: "filtered-layer-list",
  styleUrls: ["./filtered-layer-list.component.scss"],
  templateUrl: "./filtered-layer-list.component.html",
})
export class FilteredLayerListComponent implements OnInit {
  /**
   * Texte de filtrage.
   */
  @Input() public filter: string;

  /**
   * Echelle (optionnel)
   */
  @Input() public scale: number;

  /**
   * Active le tooltip de détail (optionnel)
   */
  @Input() public tooltipEnabled: boolean;

  /**
   * Evenement du `tree` primeng
   */
  @Output() public nodeSelect: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Evenement du `tree` primeng
   */
  @Output() public nodeUnselect: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  public layers: TreeNode[] = [
    {
      children: [],
      label: "Couches",
      leaf: false,
      type: "folder",
    },
    {
      children: [],
      label: "Couches utilisateur",
      leaf: false,
      type: "folder",
    },
  ];

  public selectedLayers: TreeNode[] = [];

  constructor(private layerTreeNodes: LayerTreeNodeService) {}

  public ngOnInit(): void {
    // fixme, pour maquette uniquement, a transformer depuis l'input vers le filteredLayer
    this.layerTreeNodes.getLayerNodes().subscribe(data => {
      this.layers.map(this.layerTreeNodes.applyFolderIcons);
      this.layers[0].children = data;
    });
  }

  // TODO US184 : composant plus personnalisé
  public tooltipTemplate(minScale: number, maxScale: number, label: string): string {
    return [
      `<i class="fa fa-eye"></i>`,
      `&nbsp;de 1/${minScale} à 1/${maxScale}`,
      `<div class="layer-tooltip-detail">`,
      `<img class="icon" src="favicon.ico">${label}`,
      `</div>`,
    ].join("");
  }
}
