import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { LEGEND_MOCK } from "./legend-mock.data";
import { LegendService } from "../../services/legend.service";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";

export interface LegendLayer {
  layerId: number;
  layerName: string;
  layerType: string;
  minScale: number;
  maxScale: number;
  legend: LegendSymbol[];
}
export interface LegendSymbol {
  label: string;
  url: string;
  imageData: string;
  contentType: string;
  height: number;
  width: number;
  values: string[];
}

/**
 * Composant affichant la légende et les échelles min/max d'une couche.
 */
@Component({
  encapsulation: ViewEncapsulation.None, // on veut que les styles cdk-container soient globaux.
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: {
        suppressScrollY: true,
        wheelPropagation: true,
      },
    },
  ],
  selector: "symbology-tooltip",
  styleUrls: ["./symbology-tooltip.component.scss"],
  templateUrl: "./symbology-tooltip.component.html",
})
export class SymbologyTooltipComponent implements OnInit, OnChanges {
  /**
   * Uid de la couche dont on veut la légende.
   */
  @Input() public layerUid: string;

  /**
   * Données de la couche.
   */
  public layer: LegendLayer = LEGEND_MOCK;

  /**
   * Configuration de `perfect-scrollbar`
   */
  public scrollConfig: any = {
    swipeEasing: true,
    suppressScrollY: false,
    // autant qu'on peu, pas de scroll horizontal.
    suppressScrollX: true,
    // propage les évènement molette de souris aux enfants.
    wheelPropagation: true,
  };

  constructor(private sanitizer: DomSanitizer, private legendService: LegendService) {}

  ngOnInit() {
    console.log("TOOLTIP INIT");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("TOOLTIP CHANGE");
    if (changes && changes.layerUid.currentValue) {
      console.log("LAYERUID CHANGE");
      // this.legendService.getLegendForLayer(layerUid).subscribe();
    }
  }
  /**
   * Créé l'uri data du symbole en passant par le DomSanitizer angular pour éviter les warnings de sécurité.
   *
   * @param contentType le contentType de l'image (généralement image/png)
   * @param imageData le contenu de l'image encodé en base64
   * @see https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
   * @see https://angular.io/api/platform-browser/DomSanitizer
   */
  public createImageSource(contentType: string, imageData: string) {
    // angular aime pas trop les url/src dynamiques (sécurité).
    return `data:${contentType};base64,${imageData}`;
    /*this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:${contentType};base64,${imageData}`,
    );*/
  }
}
