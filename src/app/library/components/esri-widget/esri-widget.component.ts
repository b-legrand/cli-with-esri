import { ViewChild, ElementRef, OnInit } from "@angular/core";
import { EsriWidgetType } from "./esri-widget-type.enum";

export type EsriWidget = __esri.Widget;

/**
 * Super classe des widgets esri, chargée d'instancier
 * les widgets esri pour les composants de la librairie
 *
 * principe de base :
 *
 * les sous-classes  fournissent le type attendu et les propriétés de constructeur on renvoie
 */
export abstract class EsriWidgetComponent<
  T extends __esri.Widget,
  C extends __esri.WidgetConstructor
> implements OnInit {
  /**
   * Chaque widget esri peut fournir dans son template un `#esriContent` ou sera injecté le dom des widget esri.
   */
  @ViewChild("esriContent") protected content: ElementRef;

  /**
   * Le type de ce widgets, permets de faire corrsepondre map esri et string de widget pour les requre().
   * @see
   */
  protected esriWidget: EsriWidgetType;

  /**
   * si on veut redéfinir la vue mais garder le comportement.
   * le viewModel est accessible aux sous-classes.
   */
  protected esriViewModel: string;

  constructor() {}

  public ngOnInit(): void {}
}
