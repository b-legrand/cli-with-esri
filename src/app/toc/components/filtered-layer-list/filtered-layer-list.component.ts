import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { TreeNode } from "primeng/api";
import { LayerTreeNodeService } from "../../services/layer-tree-node.service";

/**
 * Composant permettant à l'utilisateur de filtrer une liste de couche.
 * gère une liste filtrée en état local.
 */
@Component({
  selector: "filtered-layer-list",
  templateUrl: "./filtered-layer-list.component.html",
  styleUrls: ["./filtered-layer-list.component.scss"],
})
export class FilteredLayerListComponent implements OnInit, OnChanges {
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

  public layers: TreeNode[] = [
    {
      type: "folder",
      label: "Couches",
      leaf: false,
      children: [],
    },
    {
      type: "folder",
      label: "Couches utilisateur",
      leaf: false,
      children: [],
    },
  ];

  public selectedLayers: TreeNode[] = [];

  constructor(private layerTreeNodes: LayerTreeNodeService) {
    // fixme, a transformer depuis l'input vers le filteredLayer
    layerTreeNodes.getLayerNodes().subscribe(data => {
      this.layers.map(layerTreeNodes.applyFolderIcons);
      this.layers[0].children = data;
    });
  }

  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes.filter) {
      console.log(changes.filter.currentValue);
    }
  }
}
