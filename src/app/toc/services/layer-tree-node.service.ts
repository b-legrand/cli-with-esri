import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { TreeNode } from "primeng/api";
import { STUB_LAYERS } from "../models/layers.mock";
import { SubLayer } from "../models/sub-layer.vo";

// point d'injection pour pouvoir tester.
export const LAYERS = new InjectionToken("map.layers");
/**
 * Service permettant de transformer les données de couches en arbre.
 * au format attendu par le composant filtered-layer-list.
 */
@Injectable()
export class LayerTreeNodeService {
  constructor(@Inject(LAYERS) private layers: SubLayer[]) {}

  public getLayerNodes(): Observable<TreeNode[]> {
    if (!this.layers) {
      this.layers = STUB_LAYERS;
    }
    return Observable.of(
      this.layers.map(layer => this.layersToTreeNode(layer)),
    );
  }

  private layersToTreeNode(layer: SubLayer): TreeNode {
    const treeNode: TreeNode = this.layerToNode(layer);
    // si la couche a des sous-couches, on récurse
    if (layer.sublayers) {
      treeNode.children = layer.sublayers.map(child =>
        this.layersToTreeNode(child),
      );
      treeNode.type = "group";
      treeNode.leaf = false;
      this.applyFolderIcons(treeNode);
    }
    return treeNode;
  }

  private layerToNode(layer: SubLayer): TreeNode {
    const { title, uid, visible, minScale, maxScale } = layer;
    return {
      label: title,
      data: {
        uid,
        visible,
        minScale,
        maxScale,
      },
      type: "leaf",
    };
  }

  public applyFolderIcons(treeNode: TreeNode): TreeNode {
    treeNode.expandedIcon = "fa-folder-open-o";
    treeNode.collapsedIcon = "fa-folder-o";
    return treeNode;
  }
}
