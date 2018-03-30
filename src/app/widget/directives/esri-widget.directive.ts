import { Directive, OnInit, ElementRef, Input } from "@angular/core";
import { EsriMapService } from "../../map/services/esri-map.service";

/**
 * But de cette directive :
 * cacher les manipulations du dom faites par un composant qui veut s'inscrire en tant que widget esri.
 * Permets de gérer de manière transparente l'inscription des widgets, ils n'ont plus à s'ajouter automatiquement.
 */
@Directive({
  selector: "[esriWidget]",
})
export class EsriWidgetDirective implements OnInit {
  /**
   * Position dans l'ui esri ('top-left','bottom-left','top-right','bottom-right')
   */
  @Input() public position: string;

  /**
   * Index dans la zone.
   */
  @Input() public index: number;

  private el: HTMLElement;

  constructor(el: ElementRef, private mapService: EsriMapService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      // Une fois la map chargée, ajoute le widget.
      this.mapService.addWidget(this.el, this.position);
    });
  }
}
