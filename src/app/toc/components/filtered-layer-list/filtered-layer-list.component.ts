import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {LayerTreeNodeService} from '../../services/layer-tree-node.service';

@Component({
  selector: 'filtered-layer-list',
  templateUrl: './filtered-layer-list.component.html',
  styleUrls: ['./filtered-layer-list.component.scss']
})
export class FilteredLayerListComponent implements OnInit, OnChanges {

  /**
   * Texte de filtrage.
   */
  @Input() public filter: string;

  @Input() public scale: number;

  @Input() public tooltip: boolean;

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
      type: 'folder',
      label: 'Couches',
      leaf: false,
      children: []
    },
    {
      type: 'folder',
      label: 'Couches utilisateur',
      leaf: false,
      children: [
      ]
    },
  ];

  public selectedLayers: TreeNode[] = [];

  constructor(private layerTreeNodes: LayerTreeNodeService) {
    layerTreeNodes.getLayerNodes().subscribe(data => {
      this.layers.map(layerTreeNodes.applyFolderIcons);
      this.layers[0].children = data;
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes ) {
    if (changes.filter.currentValue) {
      console.log(changes.filter.currentValue);
    }
  }

}
