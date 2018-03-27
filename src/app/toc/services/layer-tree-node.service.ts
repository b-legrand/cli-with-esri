import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as layersData from '../data/layers.json';
import { TreeNode } from 'primeng/api';

interface SubLayer {
  title: string;
  uid: string;
  id: string;
  // containers
  token?: string;
  url?: string;
  sublayers?: SubLayer[];
  // leafs
  visible?: boolean;
  minScale?: number;
  maxScale?: number;

}
@Injectable()
export class LayerTreeNodeService {

  private layers: SubLayer[];

  constructor() {
    this.layers = (layersData as any).layers as SubLayer[];
  }

  public getLayerNodes(): Observable<TreeNode[]> {
    return Observable.of(
      this.layers.map(layer => this.convertLayersToTreeNode(layer))
    );
  }

  private convertLayersToTreeNode(layer: SubLayer): TreeNode {
    const treeNode: TreeNode = this.layerToNode(layer);
    // si la couche a des sous-couches, on récurse
    if (layer.sublayers) {
      treeNode.children = layer.sublayers.map(child => this.convertLayersToTreeNode(child));
      treeNode.type = 'group';
      treeNode.leaf = false;
      this.applyFolderIcons(treeNode);
    }
    return treeNode;
  }

  private layerToNode(layer: SubLayer): TreeNode {
    const { title, uid, visible, minScale, maxScale} = layer;
    return {
      label: title,
      data: {
        uid,
        visible,
        minScale,
        maxScale,
      },
      type: 'leaf',
    };
  }

  public applyFolderIcons(treeNode: TreeNode): TreeNode {
    treeNode.expandedIcon = 'fa-folder-open-o';
    treeNode.collapsedIcon = 'fa-folder-o';
    return treeNode;
  }
}

