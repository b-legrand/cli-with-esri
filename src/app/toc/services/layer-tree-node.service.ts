import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { TreeNode } from "primeng/api";
import * as layersData from "../data/layers.json";

/**
 * Paramètres d'entrées.
 */
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
// point d'injection pour pouvoir tester.
export const LAYERS = new InjectionToken("map.layers");
/**
 * Service permettant de transformer les données de couches en arbre.
 * pour le composant filtered-layer-list.
 */
@Injectable()
export class LayerTreeNodeService {
  constructor(@Inject(LAYERS) private layers: SubLayer[]) {}

  public getLayerNodes(): Observable<TreeNode[]> {
    if (!this.layers) {
      this.layers = (layersData as any).layers;
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
